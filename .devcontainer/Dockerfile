# Use a Node.js base image to get Node and npm
FROM node:20-bookworm

# Install git and wget
RUN apt-get update && apt-get install -y --no-install-recommends \
    git \
    wget \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Install Hugo extended version
ARG HUGO_VERSION=0.127.0 # Use a recent extended version
ARG TARGETARCH
ARG HUGO_ARCH=""
RUN case ${TARGETARCH} in \
        amd64) HUGO_ARCH="amd64";; \
        arm64) HUGO_ARCH="arm64";; \
    esac \
    && export HUGO_ARCH \
    && echo "Installing Hugo for architecture: ${HUGO_ARCH}" \
    && HUGO_BINARY="hugo_extended_${HUGO_VERSION}_linux-${HUGO_ARCH}.deb" \
    && HUGO_CHECKSUM_URL="https://github.com/gohugoio/hugo/releases/download/v${HUGO_VERSION}/hugo_${HUGO_VERSION}_checksums.txt" \
    && wget -O ${HUGO_BINARY} "https://github.com/gohugoio/hugo/releases/download/v${HUGO_VERSION}/${HUGO_BINARY}" \
    && wget -O checksums.txt ${HUGO_CHECKSUM_URL} \
    && grep ${HUGO_BINARY} checksums.txt | sha256sum -c - \
    && dpkg -i ${HUGO_BINARY} \
    && rm ${HUGO_BINARY} checksums.txt

# Set the working directory
WORKDIR /workspace

# Expose Hugo server port
EXPOSE 1313 