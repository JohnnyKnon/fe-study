import ImageViewer from '../../ImageViewer'
import { useState } from 'react'
import ImageGalleryType001 from './Type001/ImageGalleryType001'

function ImageGallery({ images, type }: { images: string[]; type: string }) {
  // 클릭한 이미지의 인덱스를 보관할 상태
  const [selectedIdx, setSelectedIdx] = useState(-1)

  const open = selectedIdx > -1 // 인덱스가 -1 보다 클때 오픈 True를 반환

  // 이미지 선택(슬라이더 오픈) 함수
  const handleSelectedImage = (idx: number) => {
    setSelectedIdx(idx)
  }

  // 이미지 슬라이더 닫기 함수
  const handleClose = () => {
    setSelectedIdx(-1)
  }

  return (
    <>
      <CallTypeImageGallery
        images={images}
        type={type}
        handleSelectedImage={handleSelectedImage}
      />
      <ImageViewer
        images={images}
        open={open}
        selectedIdx={selectedIdx}
        onClose={handleClose}
      />
    </>
  )
}

function CallTypeImageGallery({
  images,
  type,
  handleSelectedImage,
}: {
  images: string[]
  type: string
  handleSelectedImage: (idx: number) => void
}) {
  switch (type) {
    case 'Type001':
      return (
        <ImageGalleryType001
          images={images}
          handleSelectedImage={handleSelectedImage}
        />
      )
      break
    default:
      return null
      break
  }
}

export default ImageGallery
