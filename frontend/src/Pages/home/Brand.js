import { Component } from "react";
class Brand extends Component {
    constructor(props) {
        super(props);
    }
    state = {};
    render() {
        return (
            <section className="padding-bottom">
                <header className="section-heading heading-line">
                    <h4 className="title-section text-uppercase">Thương hiệu</h4>
                </header>
                <ul className="row mt-4">
                    <li className="col-md col-6">
                        <a href="#" className="icontext">
                            
                            <img className="icon-brand-sm" src={require("../../assets/images/icons/brands/bandai.png")} />
                            <span></span>
                        </a>
                    </li>
                    <li className="col-md col-6">
                        <a href="#" className="icontext">
                            
                            <img className="icon-brand-sm" src={require("../../assets/images/icons/brands/bandai-blue.png")} />
                            <span></span>
                        </a>
                    </li>
                    <li className="col-md col-6">
                        <a href="#" className="icontext">
                            
                            <img className="icon-brand-sm" src={require("../../assets/images/icons/brands/52toy.png")} />
                            <span></span>
                        </a>
                    </li>
                    <li className="col-md col-6">
                        <a href="#" className="icontext">
                            
                            <img className="icon-brand-sm" src={require("../../assets/images/icons/brands/furyu.png")} />
                            <span></span>
                        </a>
                    </li>
                    <li className="col-md col-6">
                        <a href="#" className="icontext">
                            
                            <img className="icon-brand-sm" src={require("../../assets/images/icons/brands/mihoyo.png")} />
                            <span></span>
                        </a>
                    </li>
                    <li className="col-md col-6">
                        <a href="#" className="icontext">
                            
                            <img className="icon-brand-sm" src={require("../../assets/images/icons/brands/alter.png")} />
                            <span></span>
                        </a>
                    </li>
                    <li className="col-md col-6">
                        <a href="#" className="icontext">
                            
                            <img className="icon-brand-sm" src={require("../../assets/images/icons/brands/sega.png")} />
                            <span></span>
                        </a>
                    </li>
                    <li className="col-md col-6">
                        <a href="#" className="icontext">
                            
                            <img className="icon-brand-sm" src={require("../../assets/images/icons/brands/taigo.png")} />
                            <span></span>
                        </a>
                    </li>
                    <li className="col-md col-6">
                        <a href="#" className="icontext">
                            
                            <img className="icon-brand-sm" src={require("../../assets/images/icons/brands/megahouse.png")} />
                            <span></span>
                        </a>
                    </li>
                </ul>
                <article className="my-4">
                    <img src={require("../../assets/images/banners/home_bannerfull.png")} className="w-100" />
                </article>

            </section>

        );
    }
}
export default Brand;