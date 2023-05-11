# 第一阶段：构建阶段
FROM node:16-alpine AS build

# 设置工作目录
WORKDIR /nakoruru

# 将 package.json 和 package-lock.json 复制到工作目录
COPY package*.json ./
COPY pnpm-lock.yaml ./
COPY .npmrc ./

# 安装依赖包
RUN npm install -g pnpm
RUN pnpm install

# 打包项目
RUN npm run build

# 将所有文件复制到工作目录
COPY . .

# 第二阶段：部署阶段
FROM nginx

# 复制打包后的 dist 文件夹到默认的 Nginx 静态文件目录
COPY --from=build /nakoruru/dist /usr/share/nginx/html

# 复制 Nginx 配置文件到默认的 Nginx 配置文件目录
COPY --from=build /nakoruru/dist/nginx.conf /etc/nginx/conf.d/default.conf

# 开启 gzip 压缩
RUN sed -i 's/#gzip/gzip/' /etc/nginx/nginx.conf

# 将容器的端口映射到宿主机的 80 端口
EXPOSE 80

# 启动 Nginx 服务
CMD ["nginx", "-g", "daemon off;"]