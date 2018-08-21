## php CI 框架环境 配置模板引擎和引用map表

1.从http://https://github.com/feather-team/feather_view下载feather_view模板引擎，放在application/libraries目录下，并将Father_View.class.php文件名改成Feather_View.php(CI框架命名规范).

2.新建baseControlle.php，
class BaseController extends CI_Controller {
    function __construct()
    {
        parent::__construct();

        $this->load->library('Feather_View');
        $this->feather_view->template_dir = 'D:/dest/application/views';
        $this->feather_view->suffix = '.html';
        $this->feather_view->registerPlugin('autoload_static',array(
            'domain'=>$this->config->item('static_base_url')
        ));
    }
}

3.在CommentController中，
<?php
class City extends BaseController
{
    public function __construct()
    {
        parent :: __construct();
    }
    public function index( $order_id="" )
    {
        $this->feather_view->set($data);
        $this->feather_view->display('page/home/index');
    }
}


## 本地发布调试

 直接feather release -D --dest remote 172.16.218.9

杨婷 2015/5/11 17:02:09

到张妨妨的域名上  172.16.218.9
http://zhangfangfang-laravel.dev2.anhouse.com.cn/mobile/crowd/detail?id=8


remote:[
            {
                from: '/static',
                //本地目录
                to: '/data1/www/ipo/static/zhangfangfang',
                subOnly: true,
                receiver : 'http://www.dev2.anhouse.com.cn/frontupload.php'
            },{
                from: '/view',
                //本地目录
                to: '/data1/www/laravel/cloud/zhangfangfang/gold/resources/views/mobile',
                subOnly: true,
                receiver : 'http://www.dev2.anhouse.com.cn/frontupload.php'
            }
        ]

或者：
 paffe release -opD -d remote_lsj
remote_lsj: [
            {
                from: '/hf-static',
                //本地目录
                to : '/data1/www/static_cloudushengjie',
                include: /hf-static\/.*\/(?:hfb|common)\/.*/,
                subOnly: true,
                receiver : 'http://static.zhanghao.dev.ipo.com/receiver.php'
            },{
                from: '/app-render',
                //本地目录
                to: '/data1/www/dev_cloudushengjie/hfb/app-trade-hfb',
                include: /(?:hfb)\/.*\.(?:phtml|php)$/,
                receiver : 'http://static.zhanghao.dev.ipo.com/receiver.php',
                subOnly: true
            }
        ],
