
# Node version
FROM node:20

# Make work directory
WORKDIR /usr/src/app

# Copy files
COPY package*.json ./
COPY tsconfig.json ./
COPY . ./

# Install packages 
RUN npm install

# Build application
RUN npm run build

# PORT defined
EXPOSE 3000

# Execute command
CMD ["npm", "run", "preview"]