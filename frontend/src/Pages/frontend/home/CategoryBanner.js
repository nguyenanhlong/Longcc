import { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import categoryservice from "../../Services/CategoryService";

function CategoryBanner() {
    const [categorys, setCategory] = useState([]);
    useEffect(function () {
        (async function () {
            await categoryservice.getAll().then(function (result) {
                setCategory(result.data.data);
            });
        })();
    }, []);
    return (
        <>
            <section class="section-index-bannerlink">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 col-sm-6 col-xs-12 ">
                            <div class="bannerlink-block content-item" >
                                <div class="bannerlink-block--image ">
                                    <a href="#" aria-label="Nendoroid">
                                        <img src={require("../../../assets/images/banners/categorybanner_1_img.jpg")} className="img-bg" ></img>
                                    </a>
                                </div>
                                <div class="bannerlink-block--caption">
                                    <p class="tagline">Bộ sưu tập</p>
                                    <h2 class="htitle">Nendoroid</h2>
                                    <p class="txtdesc" style={{ maxWidth: 300 }}>Dòng chibi figure được yêu thích nhất, nhiều gương mặt, thoả sức tạo dáng</p>
                                    <p class="action">
                                        <Link to={`/san-pham/${item.slug}/1`}>
                                            <button class="custom-btn btn-5"><span>Xem ngay <i class="fa fa-angle-right" aria-hidden="true"></i></span></button>
                                        </Link>
                                    </p>

                                </div>

                            </div>
                        </div>
                        <div class="col-md-6 col-sm-6 col-xs-12 ">
                            <div class="bannerlink-block content-item" >
                                <div class="bannerlink-block--image ">
                                    <a href="#" aria-label="Pop Up Parade">
                                        <img src={require("../../../assets/images/banners/categorybanner_2_img.jpg")} className="img-bg" ></img>
                                    </a>
                                </div>
                                <div class="bannerlink-block--caption">
                                    <p class="tagline">Bộ sưu tập</p>
                                    <h2 class="htitle">Pop Up Parade</h2>
                                    <p class="txtdesc" style={{ maxWidth: 300 }}>Dòng scale figure kích thước sinh viên, giá tiểu học</p>
                                    <p class="action">
                                        <Link to={`/san-pham/${item.slug}/1`}>
                                            <button class="custom-btn btn-5"><span>Xem ngay <i class="fa fa-angle-right" aria-hidden="true"></i></span></button>
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default CategoryBanner;


