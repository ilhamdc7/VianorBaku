import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const NewsBody = ({ post }) => {

  return (
    <div class="site__body">
      <div class="block-header block-header--has-breadcrumb block-header--has-title">
        <div class="container container--max--xl">
          <meta
            name="description"
            content='Vianor Təkər Mərkəzi köçürmə, nəğd, kredit ilə təkər satışını təşkil edir. Kredit Birkart, Bolkart, Albalıkart,Tamkart,və Şəxsiyyət vəsiqəsi ilə mümkündür. Vianor Təkər Mərkəzi "Nokian"  "Laufenn"  "Toyo"  "Blackhawk" markalarının tək və rəsmi nümayəndəsi və digər brendlərində satışını təşkil edirik.Siz keyfiyyətli yay qış təkərlərini cox münasib qiymətə əldə edə bilərsiniz.'
          />
          <meta
            name="keywords"
            content="təkər,ucuz teker,radius.az, tekerevi.az, tekerlamei.az, avtoteker.az,qiymet,teker qiymetler,teker,sin,shin,покрышки,шина,зимний шины, летнии шины, демисезонная шина,колеса,диск,балансировка колес,баланс,развал,сход,balans,razval,disk,disk təmiri,disk temiri,satışı,usta,xidmət,nokian,laufenn,blackhawk,toyo,hankook,michelin,continental,bridgestone,yokohama,goodyear,sava,tigar,nexen,kumho,dunlop,maxxis,kapsen,lassa,petlas,sailun,apollo,riken,barum,matador,general,horizon,bazar,teker satışı,teker satisi,disk satisi,tekerevi,radius,vianor,vianorbaku,vianorazerbaycan,vianorazərbaycan,nokianazərbaycan,nokianazerbaycan,nokianbaku,nokianbakı,laufennazərbaycan,laufennazerbaycan,radiusbakı,radiuspluss,socar,topservis,anbar,maya,topdan,lassabakı,lassabaku,lassaazərbaycan,lassaazerbaycan,kaa.az,radius.az,tekerevi.az,topdanteker,tekerstore.az,intersin,fb,instagram,youtube,avtomobil təkəri,avtomobil tekeri,icarə,rentakar,rentacar,nisye,kredit,kredit teker,nisyeteker,köçürmətəkər,təkərmərkəzi,avtomobil təkər mərkəzi,youtube,təkərlər,disklər,yag,yagsatışı,shell,mobil,liquimoly,motul,zapcast,ehtiyat hissesi,avtodetal,stutqart,kaan.az,filter,filtron,işlənmiş təkər,təzə təkər, 195/65 R15, 195 65 15 , 205 55 16, 265 65 17, 285 50 20, 215 55 16, 225 55 16, 175 70 13, 185 65 14 ,mercedes, hyundai, kia , chevrolet, leep, prado,lund cruiser, toyota, corolla,camry,rio,accent,elantra,ford,yük təkəri,cargo,kamaz təkəri,lokomotiv,jinyu,pajero,kiafunclub,audi,volkswagen,range rover, teker satışı, avtoteker,"
          />
          <title>Ən yeni xəbərlər</title>

          <div class="block-header__body">
            <h1 class="block-header__title">Ən yeni xəbərlər</h1>
          </div>
        </div>
      </div>

      <div class="block blog-view blog-view--layout--list">
        <div class="container container--max--xl">
          <div class="blog-view__body">
            <div class="blog-view__item blog-view__item-posts">
              <div class="block posts-view">
                <div class="posts-view__list posts-list posts-list--layout--list">
                  <div class="posts-list__body row">
                    {post?.map((pst) => (
                      <div class="col-12 col-xl-4 ">
                        <div class="posts-list__item ">
                          <div class="post-card post-card--layout--list">
                            <div class="row">
                              <div class="post-card__image  col-12" style={{marginLeft:'auto', marginRight:'auto'}}>
                                <Link href={`/news/${pst?.id}`} style={{display:'flex', justifyContent:'center',alignItems:'center'}} >
                                  <img src={pst?.image} alt="" style={{objectFit:'cover'}} width={'410px'} height={'300px'}/>
                                </Link>
                              </div>
                              <div class="post-card__content  col-12">
                                <div class="post-card__title">
                                  <h2>
                                    <a
                                      class="news-title"
                                      style={{ textDecoration: "none" }}
                                      href="/news-detail/139/"
                                    >
                                      {pst?.title}
                                    </a>
                                  </h2>
                                </div>
                                <div
                                  class="post-card__date"
                                  style={{ marginLeft: "300px" }}
                                >
                                  {pst?.date}
                                </div>

                                <div class="post-card__excerpt">
                                  <div class="typography">
                                    {pst?.short_description}
                                  </div>
                                </div>
                                <div class="post-card__more">
                                  <Link
                                    href={`/news/${pst?.id}`}
                                    class="btn btn-secondary btn-sm"
                                  >
                                    Ətraflı
                                  </Link>
                                  <FontAwesomeIcon
                                    style={{ marginLeft: "10px" }}
                                    icon={faEye}
                                  />
                                  {pst?.view_count}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                {/* <div class="posts-view__pagination">
                  <ul class="pagination">
                    <li class="page-item active" aria-current="page">
                      <span class="page-link">
                        1<span class="sr-only">(current)</span>
                      </span>
                    </li>

                    <li class="page-item">
                      <a class="page-link" href="?page=2">
                        2
                      </a>
                    </li>

                    <li class="page-item">
                      <a class="page-link" href="?page=3">
                        3
                      </a>
                    </li>

                    <li class="page-item">
                      <a class="page-link" href="?page=4">
                        4
                      </a>
                    </li>

                    <li class="page-item">
                      <a class="page-link" href="?page=5">
                        5
                      </a>
                    </li>

                    <li class="page-item">
                      <a class="page-link" href="?page=6">
                        6
                      </a>
                    </li>

                    <li class="page-item">
                      <a class="page-link" href="?page=7">
                        7
                      </a>
                    </li>

                    <li class="page-item">
                      <a
                        class="page-link page-link--with-arrow"
                        href="?page=2"
                        aria-label="Next"
                      >
                        <span
                          class="page-link__arrow page-link__arrow--right"
                          aria-hidden="true"
                        >
                          <svg width="7" height="11">
                            <path
                              d="M0.3,10.7L0.3,10.7c0.4,0.4,0.9,0.4,1.3,0L7,5.5L1.6,0.3C1.2-0.1,0.7,0,0.3,0.3l0,0c-0.4,0.4-0.4,1,0,1.3l4,3.9l-4,3.9
	                                                        C-0.1,9.8-0.1,10.4,0.3,10.7z"
                            />
                          </svg>
                        </span>
                      </a>
                    </li>
                  </ul>
                </div> */}
                <div class="row mt-5"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="block-space block-space--layout--before-footer"></div>
    </div>
  );
};

export default NewsBody;
