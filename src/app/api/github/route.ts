import { NextResponse } from "next/server";

interface ContributionDay {
  date: string;
  contributionCount: number;
  contributionLevel:
    | "NONE"
    | "FIRST_QUARTILE"
    | "SECOND_QUARTILE"
    | "THIRD_QUARTILE"
    | "FOURTH_QUARTILE";
}

interface ContributionWeek {
  contributionDays: ContributionDay[];
}

interface ContributionCalendar {
  totalContributions: number;
  weeks: ContributionWeek[];
}

const LEVELS: ContributionDay["contributionLevel"][] = [
  "NONE",
  "FIRST_QUARTILE",
  "SECOND_QUARTILE",
  "THIRD_QUARTILE",
  "FOURTH_QUARTILE",
];

// GitHub GraphQL API로 실제 contribution 데이터 가져오기
// GITHUB_TOKEN 환경변수 설정 필요 (vercel 환경변수에 추가)
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const username = searchParams.get("username") ?? "yourname";

  const token = process.env.GITHUB_TOKEN;
  if (!token) {
    return NextResponse.json(
      { error: "GITHUB_TOKEN not set" },
      { status: 500 },
    );
  }

  const query = `
    query($username: String!) {
      user(login: $username) {
        contributionsCollection {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                contributionCount
                contributionLevel
                date
              }
            }
          }
        }
      }
    }
  `;

  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query, variables: { username } }),
    next: { revalidate: 3600 }, // 1시간 캐시
  });

  const data = await res.json();
  const calendar: ContributionCalendar =
    data?.data?.user?.contributionsCollection?.contributionCalendar;

  if (!calendar) {
    return NextResponse.json({ error: "Failed to fetch" }, { status: 500 });
  }

  const days = calendar.weeks.flatMap((w: ContributionWeek) =>
    w.contributionDays.map((d: ContributionDay) => ({
      date: d.date,
      count: d.contributionCount,
      level: LEVELS.indexOf(d.contributionLevel),
    })),
  );

  return NextResponse.json({ total: calendar.totalContributions, days });
}
