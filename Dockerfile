# 第一阶段：构建阶段
FROM node:16-alpine AS build

# 设置工作目录
WORKDIR /nakoruru

# 将 package.json、pnpm-lock.yaml 和 .npmrc 复制到工作目录
COPY package*.json ./
COPY pnpm-lock.yaml ./
COPY .npmrc ./

# 安装依赖包
RUN npm install -g pnpm

RUN pnpm install

# 将所有文件复制到工作目录
COPY . .

RUN pnpm run build

# 将容器的端口映射到宿主机的 3000 端口
EXPOSE 3000

CMD ["pnpm", "start:prod"]
