'use client'

import { useEffect, useCallback, useState } from 'react'
import { Project } from '@/types'

interface ProjectModalProps {
  project: Project
  onClose: () => void
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [imgIdx, setImgIdx] = useState(0)

  const handleKey = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose()
    if (e.key === 'ArrowLeft') setImgIdx(i => Math.max(i - 1, 0))
    if (e.key === 'ArrowRight') setImgIdx(i => Math.min(i + 1, (project.images?.length ?? 1) - 1))
  }, [onClose, project.images])

  useEffect(() => {
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [handleKey])

  const images = project.images ?? []

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()} role="dialog" aria-modal="true">

        <div className="modal-header">
          <div className="modal-terminal-bar">
            <span className="dot dot-r" onClick={onClose} style={{ cursor: 'pointer' }} title="닫기" />
            <span className="dot dot-y" />
            <span className="dot dot-g" />
            <span className="modal-title-bar">
              cat projects/{project.title.toLowerCase().replace(/\s+/g, '-')}.md
            </span>
          </div>
          <button className="modal-close" onClick={onClose} aria-label="닫기">✕</button>
        </div>

        <div className="modal-body">

          {/* 상단: 이미지 + 타이틀/메타 나란히 */}
          <div className="modal-top">
            {images.length > 0 && (
              <div className="modal-gallery">
                <div className="modal-img-wrap">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={images[imgIdx].src} alt={images[imgIdx].alt} className="modal-img" />
                  {images.length > 1 && (
                    <>
                      <button className="gallery-btn gallery-btn-l" onClick={() => setImgIdx(i => Math.max(i-1,0))} disabled={imgIdx===0}>‹</button>
                      <button className="gallery-btn gallery-btn-r" onClick={() => setImgIdx(i => Math.min(i+1,images.length-1))} disabled={imgIdx===images.length-1}>›</button>
                    </>
                  )}
                </div>
                {images.length > 1 && (
                  <div className="gallery-dots">
                    {images.map((_,i) => (
                      <button key={i} className={"gallery-dot"+(i===imgIdx?" active":"")} onClick={()=>setImgIdx(i)} />
                    ))}
                  </div>
                )}
              </div>
            )}

            <div className="modal-top-info">
              <span className="modal-label">{project.label}</span>
              <h2 className="modal-project-title">{project.title}</h2>
              {project.period && <div className="modal-meta-item"><span className="out-yellow">📅</span> {project.period}</div>}
              {project.role && <div className="modal-meta-item"><span className="out-yellow">👤</span> {project.role}</div>}
              <div className="card-tags" style={{marginTop:'12px'}}>
                {project.tags.map(tag => (
                  <span key={tag.name} className={"tag"+(tag.color?" "+tag.color:"")}>{tag.name}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="modal-divider" />

          {project.overview && (
            <div className="modal-section">
              <div className="modal-section-label"><span className="out-yellow">#</span> 개요</div>
              <p className="modal-text">{project.overview}</p>
            </div>
          )}

          {project.features && project.features.length > 0 && (
            <div className="modal-section">
              <div className="modal-section-label"><span className="out-yellow">#</span> 주요 기능</div>
              <ul className="modal-feature-list">
                {project.features.map((f,i) => (
                  <li key={i} className="modal-feature-item"><span className="out-green">›</span> {f}</li>
                ))}
              </ul>
            </div>
          )}

          {project.trouble && (
            <div className="modal-section">
              <div className="modal-section-label"><span className="out-yellow">#</span> 트러블슈팅</div>
              <div className="modal-trouble"><span className="out-red">!</span> {project.trouble}</div>
            </div>
          )}

          <div className="modal-section">
            <div className="modal-section-label"><span className="out-yellow">#</span> 스택</div>
            <div className="card-tags">
              {project.tags.map(tag => (
                <span key={tag.name} className={"tag"+(tag.color?" "+tag.color:"")}>{tag.name}</span>
              ))}
            </div>
          </div>

          {/* 링크 버튼 — 하단 원위치 */}
          {(project.github || project.demo) && (
            <div className="modal-links">
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="modal-link">
                  <span className="modal-link-icon">⌥</span> GitHub 보기 ↗
                </a>
              )}
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="modal-link accent">
                  <span className="modal-link-icon">◈</span> 데모 보기 ↗
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
