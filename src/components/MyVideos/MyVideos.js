import React from "react";
import styles from './myVideos.module.css'
import InfiniteScroll from "react-infinite-scroll-component";

const MyVideos = ({ videos, limit, setLimit }) => {
  return (
    <div class="site__body">
      <div class="block post-view">
        <div class="container container--max--xl">
          <div class="post-view__body">
            <div class="post-view__item post-view__item-post">
              <div class="post-view__card post">
                <div class="block-banners__list mt-5 row">
                  <InfiniteScroll
                  className="d-flex flex-wrap"
                  dataLength={limit}
                  hasMore={videos?.length >= limit}
                  next={() => setLimit(limit => limit + 6)}
                  >
                    {videos?.map((video) => (
                      <div className={styles.videoBox}>
                        <iframe
                          width="100%"
                          height="315px"
                          src={video?.video_url}
                          title="YouTube video player"
                          frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowfullscreen
                        ></iframe>
                        <h5 style={{ fontSize: "20px" }} class="video__title">
                          {video?.description}
                        </h5>
                      </div>
                    ))
                  }
                  </InfiniteScroll>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="block-space block-space--layout--before-footer"></div>
    </div>
  );
};

export default MyVideos;


