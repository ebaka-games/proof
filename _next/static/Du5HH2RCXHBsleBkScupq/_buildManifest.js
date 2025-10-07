self.__BUILD_MANIFEST = {
  "/_error": [
    "./static/chunks/fadab25102f483bb.js"
  ],
  "__rewrites": {
    "afterFiles": [
      {
        "source": "/proof/proof/:path*"
      }
    ],
    "beforeFiles": [
      {
        "source": "/proof//_next/:path+",
        "destination": "/proof/_next/:path+"
      }
    ],
    "fallback": []
  },
  "sortedPages": [
    "/_app",
    "/_error"
  ]
};self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB()