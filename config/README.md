## 配置说明

- **debug**: 是否是开发环境，默认是`false`
- **proxy**: 是否使用了代理服务器，设置为`true`时会启用`app.enable('trust proxy')`。默认是`false`
- **host**: 主机名
- **port**: 网站运行端口号
- **site**: 站点相关信息配置
  - **logo**: 网站 Logo 图片地址，如果不填写则默认为网站名称
  - **name**: 网站名称
  - **title**: 网站页面标题
  - **description**: 网站简介
  - **headers**: 自定义页面头信息  
      需按照 `[name, content]` 的规则填写
  - **footerNavs**: 自定义网站底部导航栏  
      需按照 `[url, text, [target]]` 的规则填写
- **weiboAppKey**: 新浪微博 appkey
- **adminEmails**: 管理员帐号的电子邮箱
- **session**: `session`配置
  - **secret**: 密钥。在使用`grunt createConfig --env=env`创建相应环境的配置文件时，会随机生成，所以一般不需要再做更改
  - **maxAge**: 过期时间，单位为毫秒
- **mongo**: `Mongodb`数据库配置
  - **db**: 数据库名
  - **servers**: 数据库服务器地址
- **static**: 前端 css 文件、js 文件等静态资源配置
  - **domain**: 留空代表使用本地服务器，否则请填写静态文件服务器的地址(加上 `http[s]://` 前缀)
  - **cwd**: `static`当前工作目录。如果 domain 为空，则 `express.static` 会配置该目录为静态目录
- **media**: 上传的图片、文件等媒体资源配置
  - **domain**: 留空代表使用本地服务器，否则请填写静态文件服务器的地址(加上 `http[s]://` 前缀)
  - **cwd**: `media`当前工作目录。如果 domain 为空，则 `express.static` 会配置该目录为静态目录
  - **uploadPath**: 上传文件的目录
- **pagination**: 分页配置
  - **pageSize**: 每页获取的记录数
- **avatarProvider**: 头像服务配置
  - **protocol**: 使用的服务的请求协议
  - **host**: 使用的服务的主机名
  - **pathname**: 路径
  - **search**: 查询字符串
  - **size**: 头像大小
- **mailer**: 邮件发送服务配置
  - **sender**: 发件人地址
  - **senderName**: 发件人名称
  - **options**: `nodemailer` SMTP 配置信息，详细请参见[这里](https://github.com/andris9/Nodemailer#setting-up-smtp)
    - **service**
    - **auth**
- **uploader**: 文件上传服务配置
  - **strategy**: 文件上传策略
  - **options**: 相应的上传策略所需要的配置信息