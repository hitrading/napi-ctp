{
  "variables": {
    "tradeapi_version": "6.7.0"
  },
  "targets": [
    {
      "target_name": "napi_ctp",
      "sources": [
        "./src/binding.cpp",
        "./src/ctpmsg.cpp",
        "./src/mdapi.cpp",
        "./src/mdspi.cpp",
        "./src/mdmsg.cpp",
        "./src/guard.cpp",
        "./src/message_queue.cpp",
        "./src/napi_ctp.cpp",
        "./src/traderapi.cpp",
        "./src/traderspi.cpp",
        "./src/tradermsg.cpp"
      ],
      "include_dirs": [
        "./tradeapi/<(tradeapi_version)/"
      ],
      "conditions": [
        ['OS=="mac"', {
          "library_dirs": [
            "<(module_root_dir)/tradeapi/<(tradeapi_version)/macos"
          ],
          "libraries": [
            "libthostmduserapi_se.a",
            "libthosttraderapi_se.a",
            "<(module_root_dir)/tradeapi/<(tradeapi_version)/macos/libs/comunicationkeylib.a",
            "<(module_root_dir)/tradeapi/<(tradeapi_version)/macos/libs/libcrypto.a",
            "<(module_root_dir)/tradeapi/<(tradeapi_version)/macos/libs/libssl.a"
          ]
        }],
        ['OS=="win"', {
          "library_dirs": [
            "<(module_root_dir)/tradeapi/<(tradeapi_version)/windows"
          ],
          "libraries": [
            "thostmduserapi_se.lib",
            "thosttraderapi_se.lib"
          ],
          "copies": [
            {
              "destination": "<(PRODUCT_DIR)",
              "files": [
                "<(module_root_dir)/tradeapi/<(tradeapi_version)/windows/thostmduserapi_se.dll",
                "<(module_root_dir)/tradeapi/<(tradeapi_version)/windows/thosttraderapi_se.dll"
              ]
            }
          ]
        }],
        ['OS=="linux"', {
          "libraries": [
            "<(module_root_dir)/tradeapi/<(tradeapi_version)/linux/thostmduserapi_se.so",
            "<(module_root_dir)/tradeapi/<(tradeapi_version)/linux/thosttraderapi_se.so"
          ]
        }]
      ]
    }
  ]
}
