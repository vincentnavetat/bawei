import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Img from 'gatsby-image'

class Lightbox extends Component {
  state = {
    showLightbox: false,
    selectedImage: 0,
  }

  componentDidMount = () => {
    window.addEventListener('keyup', this.handleKeyUp, false)
  }

  componentWillUnmount = () => {
    window.removeEventListener('keyup', this.handleKeyUp, false)
  }

  handleClick = (e, index) => {
    e.preventDefault()
    this.setState({ showLightbox: !this.state.showLightbox, selectedImage: index })
  }

  closeModal = () => {
    this.setState({ showLightbox: false })
  }

  goBack = () => {
    this.setState({ selectedImage: this.state.selectedImage - 1 })
  }

  goForward = () => {
    this.setState({ selectedImage: this.state.selectedImage + 1 })
  }

  handleKeyUp = e => {
    e.preventDefault()
    const { keyCode } = e
    if (this.state.showLightbox) {
      if (keyCode === 37) {
        // Left Arrow Key
        if (this.state.selectedImage > 0) {
          this.setState({ selectedImage: this.state.selectedImage - 1 })
        }
      }
      if (keyCode === 39) {
        // Right Arrow Key
        if (this.state.selectedImage < this.props.images.length - 1) {
          this.setState({ selectedImage: this.state.selectedImage + 1 })
        }
      }
      if (keyCode === 27) {
        // Escape key
        this.setState({ showLightbox: false })
      }
    }
  }

  render() {
    const { images } = this.props
    const { showLightbox, selectedImage } = this.state
    return (
      <Fragment>
        <Gallery>
          {images.map((img, i) => (
            <GalleryItem key={img.node.sizes.src}>
              <a href={img.node.sizes.src} alt="Car Image" onClick={e => this.handleClick(e, i)}>
                <StyledImg sizes={img.node.sizes} />
              </a>
            </GalleryItem>
          ))}
        </Gallery>

        <LightboxModal visible={showLightbox} onKeyUp={e => this.handleKeyDown(e)}>
          <ImgContainer visible={showLightbox}>
            <Img sizes={images[selectedImage].node.sizes} />
          </ImgContainer>
          <Controls>
            <CloseButton onClick={this.closeModal}>Close</CloseButton>
            <PrevButton onClick={this.goBack} disabled={selectedImage === 0}>
              Previous
            </PrevButton>
            <NextButton onClick={this.goForward} disabled={selectedImage === images.length - 1}>
              Next
            </NextButton>
          </Controls>
        </LightboxModal>
      </Fragment>
    )
  }
}

const StyledImg = styled(Img)``

const Gallery = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: 700px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 900px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (min-width: 1100px) {
    grid-template-columns: repeat(5, 1fr);
  }

  grid-gap: 15px;
  .gatsby-image-outer-wrapper {
    height: 100%;
  }
`

const GalleryItem = styled.div`
  position: relative;
`

const PrevButton = styled.button`
  position: absolute;
  left: 0;
`

const NextButton = styled.button`
  position: absolute;
  right: 0;
`

const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
`

const LightboxModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.68);
  overflow: hidden;
  opacity: ${props => (props.visible ? '1' : '0')};
  visibility: ${props => (props.visible ? 'visible' : 'hidden')};
  transition: all .3s;
  padding: 64px;
`

const ImgContainer = styled.div`
  width: 100%;
  display: flex;
  height: 100%;
  flex: 1;
  flex-direction: column;
  transform: ${props => (props.visible ? 'scale(1)' : 'scale(.95)')};
  transition: all .3s;
`

const Controls = styled.div``

Lightbox.propTypes = {
  images: PropTypes.array.isRequired,
}

export default Lightbox
