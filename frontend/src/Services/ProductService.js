import httpAxios from '../HttpAxios'

function getAll(){
    return httpAxios.get('product/index');

}

function getById(id){
    return httpAxios.get(`product/show/${id}`);

}

function create(product){
    return httpAxios.post("product/store", product);
}

function getByCatSlug(slug, limit, page=1){
    return httpAxios.get(`productByCatSlug/${slug}/${limit}/${page}`);
}

function getProductBySlug(slug) {
    return httpAxios.get(`product_detail/${slug}`);
}

function getProductAll(limit,page=1) {
    return httpAxios.get(`product_all/${limit}/${page}`);
}
function getByCatId(limit, category_id){
    return httpAxios.get(`product/product_list/${limit}/${category_id}`);
}

function update(product, id){
    return httpAxios.post("product/update/"+id, product);
}

function remove(id){
    return httpAxios.delete(`product/destroy/${id}`);
}
const productservice = {
    getByCatId:getByCatId,
    getProductAll:getProductAll,
    getProductBySlug:getProductBySlug,
    getByCatSlug:getByCatSlug,
    getAll:getAll,
    getById:getById,
    create:create,
    update:update,
    remove:remove
}
export default productservice;