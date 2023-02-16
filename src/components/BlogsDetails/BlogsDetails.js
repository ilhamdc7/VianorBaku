import React from 'react'

const BlogsDetails = ({post}) => {
  return (
    <div class="site__body">

            <div class="block post-view">
                <div class="post-view__header post-header post-header--has-image">
                    <div class="post-header__image" style={{backgroundImage: '/'}}></div>
                    <div class="post-header__body">
                        <h1 class="post-header__title" style={{fontFamily: "Roboto, sans-serif !important"}}>{post?.title}</h1>
                        <div class="post-header__meta">
                            <ul class="post-header__meta-list">
                                <li class="post-header__meta-item">{post?.date}</li>
                            </ul>
                        </div>
                    </div>
                    <div class="decor post-header__decor decor--type--bottom">
                        <div class="decor__body">
                            <div class="decor__start"></div>
                            <div class="decor__end"></div>
                            <div class="decor__center"></div>
                        </div>
                    </div>
                </div>
                <div class="container container--max--xl">
                    <div class="post-view__body">
                        <div class="post-view__item post-view__item-post">
                            <div class="post-view__card post">
                                <div class="post__body typography" style={{fontFamily: "Roboto, sans-serif !important", textAlign: "justify",display: "flex", flexFlow: "column", alignItems: "center"}} >
                                    <div dangerouslySetInnerHTML={{__html: post?.description}} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div class="block-space block-space--layout--before-footer"></div>
        </div>
  )
}

export default BlogsDetails