import React from "react";

const MyVideos = ({ videos }) => {
  return (
    <div class="site__body">
      <div class="block post-view">
        <div class="container container--max--xl">
          <div class="post-view__body">
            <div class="post-view__item post-view__item-post">
              <div class="post-view__card post">
                <div class="block-banners__list mt-5 row">
                  {videos?.map((video) => (
                    <div
                      class="posts-list__item col-12 col-md-6 col-xl-4 mb-4 w-30"
                      style={{ marginLeft: "50px" }}
                    >
                      <div class="typography" style={{ textAlign: "center" }}>
                        <iframe
                          width="500px"
                          height="315"
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
                    </div>
                  ))}
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
