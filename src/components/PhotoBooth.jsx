import { photoAlbumUrl, photoUploadUrl, site } from '../config'

export default function PhotoBooth() {
  return (
    <section id="photos" className="section tinted">
      <h2 className="section-title">Photo Booth</h2>
      <div className="divider" />
      <p className="lead">Snap it, share it! Add your photos from the weekend.</p>
      <div className="photobooth reveal">
        <div className="photobooth-buttons">
          <a className={`btn ${photoUploadUrl ? '' : 'disabled'}`} href={photoUploadUrl || undefined} target="_blank" rel="noopener noreferrer">
            Upload Photos
          </a>
          <a className={`btn btn-outline ${photoAlbumUrl ? '' : 'disabled'}`} href={photoAlbumUrl || undefined} target="_blank" rel="noopener noreferrer">
            View the Album
          </a>
        </div>
        {!photoUploadUrl && <p className="small">The album opens closer to the big day.</p>}
        <p className="small">
          Tag your photos <strong>{site.hashtag}</strong>
        </p>
      </div>
    </section>
  )
}
