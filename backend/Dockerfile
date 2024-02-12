# Usa una imagen base de Node.js
FROM node:18-alpine

# Establece el directorio de trabajo en /app
WORKDIR /usr/src/app

# Environment variables
ENV NODE_ENV production

# Copia el package.json y package-lock.json a /app
COPY package*.json ./

# Instala las dependencias
RUN npm ci --only=production

# Security improvement
USER node

# Copia el resto de los archivos a /app
COPY --chown=node:node ./src . 

# Expone el puerto 3000
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["node", "index.js"]
