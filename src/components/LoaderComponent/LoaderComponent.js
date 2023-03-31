import React from 'react'
import styles from './loaderComponent.module.css'


const LoaderComponent = () => {
  return (
    <div className={styles.loaderCargeContainer}>
      <span className={styles.customCssLoader}></span>
    </div>
  )
}

export default LoaderComponent