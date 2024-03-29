/**
 * 商品路由
 * 创建时间:23/8/18
 * 开发者:WLT
 */

/*商品  id          int                 商品id
        title       varhcar(255)        商品名称
        url         varchar(255)        商品图片url
        price       varchar(20)         商品价格
        old         varchar(20)         商品老价格
        sale        varchar(20)         浏览量
        category    varchar(10)         分类id

 * 商品路由器,用于添加商品('/send'),删除商品('/del'),
 * 查询所有商品('/list'),用于主页面
 * 根据id查询单个商品('/detail'),用于商品细节页面
 * 根据分类id查询多个商品,('/cate'),用于点击导航栏查询分类商品
 * 根据关键字查询商品,('/search'),用于根据关键字查询商品
*/