var path = require("path");
var ExtractTextPlugin = require("extract-text-webpack-plugin");  //从js文件中分离文件的插件
var HtmlWebpackPlugin = require("html-webpack-plugin");  //在输入文件夹里添加html页面

module.exports = {
	entry: path.resolve(__dirname, 'src/entry.jsx'),
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "./server")
	},

	//自动解析后缀为下列的格式的文件，意思就是在import引入文件的时候，就不用再写这些后缀了
	resolve: {
		extensions: ['.js', '.jsx', '.less', '.css'],
		alias: {
			api: path.resolve(__dirname, 'src/fetch/api'),  //使用绝对路径
			urls: path.resolve(__dirname, 'src/fetch/url'),
			public: path.resolve(__dirname, 'src/public/public.js'),
			actionAll: path.resolve(__dirname, 'src/container/actions/actionAll'),
			rightModal: path.resolve(__dirname, 'src/components/rightModal/index'),
			modalMoudle: path.resolve(__dirname, 'src/components/modalMoudle/index'),
			cascaderAddressOptions: path.resolve(__dirname, 'src/container/static/cascader-address-options.js')
		}
	},

	//处理不同格式的文件
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: "babel-loader"
			},
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract("css-loader")  //将css文件从js中分离出来
			},
			{
				test: /\.less$/,
				use: ExtractTextPlugin.extract(["css-loader", "less-loader"]) //把less文件转换成css文件，并从js中分离出来
			},
			{
				test: /\.(jpg|png|gif)$/,  //处理图片
				use: "url-loader?limit=8192&name=img/[name][hash].[ext]" //大于8192（8k）的时候用file-loader
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf|svg)$/,  //处理图标
				use: "url-loader?limit=1024&name=font/[name][hash].[ext]" //大于1024（1k）的时候用file-loader
			}
		]
	},

	//开启一个服务器
	devServer: {
		port: 8090,  //监听8090端口
		open: true,  //服务器启动后打开默认浏览器 localhost:8080
		openPage: "#/login",  //在url上添加路径
		proxy: {  //代理
			'/api': {
	            target: 'http://localhost:8080',
	            secure: false
	        }
		}
	},

	plugins: [

		//将从js中分离出来的样式合并到指定样式文件中
		new ExtractTextPlugin("styles.css"),

		//在输出文件夹中添加html页面
		new HtmlWebpackPlugin({
			template: __dirname + '/src/index.html', //将指定的html页面内容覆盖到输出文件夹中的html里,并且会自动引入出口bundle.js以及分离出来的css文件
			favicon: __dirname + '/src/ico/favicon.ico'  //添加网站的图标
		})
	]
}
