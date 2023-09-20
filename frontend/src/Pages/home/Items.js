import { Component } from "react";
import { Link } from "react-router-dom";
class Items extends Component {
    constructor(props) {
        super(props);
    }
    state = {};
    render() {
        return (
            <section className="padding-bottom-sm">
                <header className="section-heading heading-line">
                    <h4 className="title-section text-uppercase">Recommended items</h4>
                </header>
                <div className="row row-sm">
                    <div className="col-xl-2 col-lg-3 col-md-4 col-6">
                        <div className="card card-sm card-product-grid">
                            <Link to="/product-detail/1" className="img-wrap">
                                
                                <img src={require("../../assets/images/items/1.jpg")} />
                            </Link>
                            <figcaption className="info-wrap">
                                <Link href="#" className="title">
                                    Just another product name
                                </Link>
                                <div className="price mt-1">$179.00</div> {/* price-wrap.// */}
                            </figcaption>
                        </div>
                    </div>
                    {/* col.// */}
                    <div className="col-xl-2 col-lg-3 col-md-4 col-6">
                        <div className="card card-sm card-product-grid">
                            <Link href="#" className="img-wrap">
                                
                                <img src={require("../../assets/images/items/2.jpg")} />
                            </Link>
                            <figcaption className="info-wrap">
                                <Link href="#" className="title">
                                    Some item name here
                                </Link>
                                <div className="price mt-1">$280.00</div> {/* price-wrap.// */}
                            </figcaption>
                        </div>
                    </div>
                    {/* col.// */}
                    <div className="col-xl-2 col-lg-3 col-md-4 col-6">
                        <div className="card card-sm card-product-grid">
                            <Link href="#" className="img-wrap">
                                
                                <img src={require("../../assets/images/items/3.jpg")} />
                            </Link>
                            <figcaption className="info-wrap">
                                <Link href="#" className="title">
                                    Great product name here
                                </Link>
                                <div className="price mt-1">$56.00</div> {/* price-wrap.// */}
                            </figcaption>
                        </div>
                    </div>
                    {/* col.// */}
                    <div className="col-xl-2 col-lg-3 col-md-4 col-6">
                        <div className="card card-sm card-product-grid">
                            <Link href="#" className="img-wrap">
                                
                                <img src={require("../../assets/images/items/4.jpg")} />
                            </Link>
                            <figcaption className="info-wrap">
                                <Link href="#" className="title">
                                    Just another product name
                                </Link>
                                <div className="price mt-1">$179.00</div> {/* price-wrap.// */}
                            </figcaption>
                        </div>
                    </div>
                    {/* col.// */}
                    <div className="col-xl-2 col-lg-3 col-md-4 col-6">
                        <div className="card card-sm card-product-grid">
                            <Link href="#" className="img-wrap">
                                
                                <img src={require("../../assets/images/items/5.jpg")} />
                            </Link>
                            <figcaption className="info-wrap">
                                <Link href="#" className="title">
                                    Just another product name
                                </Link>
                                <div className="price mt-1">$179.00</div> {/* price-wrap.// */}
                            </figcaption>
                        </div>
                    </div>
                    {/* col.// */}
                    <div className="col-xl-2 col-lg-3 col-md-4 col-6">
                        <div className="card card-sm card-product-grid">
                            <Link href="#" className="img-wrap">
                                
                                <img src={require("../../assets/images/items/6.jpg")} />
                            </Link>
                            <figcaption className="info-wrap">
                                <Link href="#" className="title">
                                    Some item name here
                                </Link>
                                <div className="price mt-1">$280.00</div> {/* price-wrap.// */}
                            </figcaption>
                        </div>
                    </div>
                    {/* col.// */}
                    <div className="col-xl-2 col-lg-3 col-md-4 col-6">
                        <div className="card card-sm card-product-grid">
                            <Link href="#" className="img-wrap">
                                
                                <img src={require("../../assets/images/items/7.jpg")} />
                            </Link>
                            <figcaption className="info-wrap">
                                <Link href="#" className="title">
                                    Great product name here
                                </Link>
                                <div className="price mt-1">$56.00</div> {/* price-wrap.// */}
                            </figcaption>
                        </div>
                    </div>
                    {/* col.// */}
                    <div className="col-xl-2 col-lg-3 col-md-4 col-6">
                        <div className="card card-sm card-product-grid">
                            <Link href="#" className="img-wrap">
                                
                                <img src={require("../../assets/images/items/9.jpg")} />
                            </Link>
                            <figcaption className="info-wrap">
                                <Link href="#" className="title">
                                    Just another product name
                                </Link>
                                <div className="price mt-1">$179.00</div> {/* price-wrap.// */}
                            </figcaption>
                        </div>
                    </div>
                    {/* col.// */}
                    <div className="col-xl-2 col-lg-3 col-md-4 col-6">
                        <div className="card card-sm card-product-grid">
                            <Link href="#" className="img-wrap">
                                
                                <img src={require("../../assets/images/items/4.jpg")} />
                            </Link>
                            <figcaption className="info-wrap">
                                <Link href="#" className="title">
                                    Just another product name
                                </Link>
                                <div className="price mt-1">$179.00</div> {/* price-wrap.// */}
                            </figcaption>
                        </div>
                    </div>
                    {/* col.// */}
                    <div className="col-xl-2 col-lg-3 col-md-4 col-6">
                        <div className="card card-sm card-product-grid">
                            <Link href="#" className="img-wrap">
                                
                                <img src={require("../../assets/images/items/5.jpg")} />
                            </Link>
                            <figcaption className="info-wrap">
                                <Link href="#" className="title">
                                    Just another product name
                                </Link>
                                <div className="price mt-1">$179.00</div> {/* price-wrap.// */}
                            </figcaption>
                        </div>
                    </div>
                    {/* col.// */}
                    <div className="col-xl-2 col-lg-3 col-md-4 col-6">
                        <div className="card card-sm card-product-grid">
                            <Link href="#" className="img-wrap">
                                
                                <img src={require("../../assets/images/items/6.jpg")} />
                            </Link>
                            <figcaption className="info-wrap">
                                <Link href="#" className="title">
                                    Some item name here
                                </Link>
                                <div className="price mt-1">$280.00</div> {/* price-wrap.// */}
                            </figcaption>
                        </div>
                    </div>
                    {/* col.// */}
                    <div className="col-xl-2 col-lg-3 col-md-4 col-6">
                        <div className="card card-sm card-product-grid">
                            <Link href="#" className="img-wrap">
                                
                                <img src={require("../../assets/images/items/7.jpg")} />
                            </Link>
                            <figcaption className="info-wrap">
                                <Link href="#" className="title">
                                    Great product name here
                                </Link>
                                <div className="price mt-1">$56.00</div> {/* price-wrap.// */}
                            </figcaption>
                        </div>
                    </div>
                    {/* col.// */}
                </div>
                {/* row.// */}
            </section>

        );
    }
}
export default Items;