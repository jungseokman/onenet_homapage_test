'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "5c3bed753413b2e52272828e2b7d362f",
"index.html": "f697f51aa3f6208ed2916d5890053bce",
"/": "f697f51aa3f6208ed2916d5890053bce",
"main.dart.js": "d5f62673d235cb499e8a089b992ed9e2",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "05008b63f5c5bc64052e8c595dd4e14f",
".git/config": "abde75198791c7a6ea22be03724386c6",
".git/objects/0d/57f936c8bea0d4f7703f2258d8d32c4f1c26ae": "4c7681755ccd78908f87dabe4ffe087f",
".git/objects/0d/5b6d78fd4b93506c4298d116d29070f99eb45c": "5c7c93315e8f8e3e5eea0010e789d778",
".git/objects/95/7e48a42bebac8a43b296fbf24f4ce49c59b12e": "c0f5ebc62cbc92a7951281a260714780",
".git/objects/0c/9154e2fb4a89f63b3261dd80ef1cace9d8ba92": "0e7a2dd6732e4fac85765eeb78657832",
".git/objects/50/0e2794d9f1bb782464b441c9a28069a01aa879": "59426e781c253d6321defd028d3bbe8c",
".git/objects/57/789669a3ffd549551f893c896e6e6cc6b20c95": "f641fa336e8760683ec0af90073db2c4",
".git/objects/3b/5c34b6feb6708953f3ac705598d93bff57816a": "0b797e5ac9f2b1c81f72365c1a09c039",
".git/objects/04/9bbcd9dc89825d554593a124d0f8173967d79d": "89c847b7b87fc03d841183a64bbd2dd2",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/51/3b13f618ccba12e988b407ac9a09613cdc2090": "32a80c198b50a0ceaf647af62acfcc20",
".git/objects/67/ca64e985b74fdf8ad788173a6be43a2bec8a73": "59da67507e070f0aae5854f8726d9b23",
".git/objects/0b/9eadaa9c489dbb6130535481036b2313badbc8": "0e7d63b8700ae5c0af690ea37f81341d",
".git/objects/93/29be506b2ac73d3652266c3e3f93fb36b18600": "3da16e3d8802fca930f64bc41021c151",
".git/objects/0e/f6f5f01095ace7ad6f621557cbe52674b98e6e": "bffe59d238b0e35165d659e73e8a144d",
".git/objects/5a/26d30a38cfc41745677966571b10218998ca00": "39bc1c630870d73fc121cf5ed411379d",
".git/objects/5f/22df3638200b649e48cc0c71e1ae21b28303ef": "8fd9356fd0a494595fc46157f9b8236d",
".git/objects/05/cb5ed19199dd50d7e47808bae558b8764c201e": "b5ab77a99ef5603bddfe4b7a664aeadf",
".git/objects/9d/deb80f202de104e3bc99b116aad33b9dd09f39": "30b429117f21dc31e141a54a9d7665b9",
".git/objects/d9/7db9c7a8b17f30b5465ac7d6266850d7e59a04": "e06d6c7c31df241784e259e7ef0c1b5a",
".git/objects/bb/3f6a6583b0d1c1f7167675f935bdb504ca0ae0": "a446cfeeb0dd71bcd54eff78f689cc05",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bb/659e770fa70dae66d71eafb88b761073621358": "da46cb5c646de0f8f99dc34521071222",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d0/330e23fedc556036269e1201e893604e5ba7f4": "b1aa62246248d424745e75a31e57f4c1",
".git/objects/be/388bf5f96ec449e87861f68e2597376dd551e5": "1702647769310164ffcf72b36093414e",
".git/objects/df/64f82d184a1c67dc9fd1b62a0507d5f2fe49bd": "4faaff5f179b9ac292d762a410e28002",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/b4/767e9a9782ef846346face75bb3dacf4a390ec": "c64db0247c24e3483c98c784549258ac",
".git/objects/a2/b161c4cf8bf0407995df54769db66faa1527a4": "4698ad9ef6a2625ae1fed293cdd3aa97",
".git/objects/d1/3db362064117a4af8e5be6124e5f14fbd606d9": "52c6422d38a6147d2ad494446df5a40c",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/870cbe1da0ae27ba92bf1cf92cb3a559b415b9": "17e051429ac1593e3fb228f58b990b61",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/fd/9558a413fda818e82e1acd6ab59c54d7bca46a": "730dfdd4b612cab7836df86fb3f19499",
".git/objects/fd/320b5f2f356ecac218f4d47f07f893b2f54283": "c7d019f03f0c18d1f1c8c29fa725540f",
".git/objects/e4/e02659d587b455790bf065cfe820fbca7e422d": "967ecf725abeae1189623f449016ae20",
".git/objects/e4/93c39de6621acaca259de8c54f1df54a7f494d": "5e1894b70785c579cffc58088b41cce8",
".git/objects/fb/1f249da1e074e89847bf46d483fad8fd654426": "80d5de7e0eb2770c41ada336c9166dda",
".git/objects/ed/8becfdfafece9c2f4324eea53f0cd916e28051": "3a3fed21e7813e904c814357c28f9855",
".git/objects/c1/555eb97ca65059063e519d14c968218cfed35e": "731b6cf4eeb07da9986e174f98de726c",
".git/objects/ec/0d30503d7cbf1d7dcc26b12318a1fa6bb0bedc": "888f65b2ae7646044c9a76d641ab979e",
".git/objects/4b/d362b347ed209ba2e6b938bdbc362cd8becb48": "b68744a04263f7d58c50bde6d2ae46af",
".git/objects/4b/f6652d96bcf2439f5658eb687ee7906dcd19fc": "e35b0c9657b26138b5b5410f3a22e226",
".git/objects/29/2634b82149b699b9ce32a5ef5d7840a6647b00": "6dd50f14dacc25c9b01807a5ff284984",
".git/objects/29/1f9ae4512a816bda4b8d65b11efdda9eba5735": "bb9b195c7803830e3052922312e6a0da",
".git/objects/7c/00e57b677fbc3979b91522ca35016d29ddd5f7": "65678b5bd266e4850fff08e11057ed32",
".git/objects/7c/5c2fae3f7bfcd4f85f45b6abae33d9f20bdf27": "0bee522d957bf8a4c6b897dd684603df",
".git/objects/89/25f9b25f94a1272dc965bd87b85277fa6eb999": "1e846910b0e353eb8e5ec3bf3d8d8d2b",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/4c/3bed3861ebcd8a58f8fbb0ad4aaf71b6e49f98": "6782b673d02708db1c71789c5c562ab9",
".git/objects/4c/a2a7c226d2c3e26f0b9dde74214486d0baa896": "734657b1f27c72d07dd9e52a25c020c1",
".git/objects/4d/7dc959d40dea6ce0342469a5fb12db3b61edd1": "2cd66be7af6b1fd92471e4fc65a6601a",
".git/objects/75/a640ace9dfdb7fa534756c7415d37789cef412": "a18e07d845055d3b4d84ca9d23c58744",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/00/0b12c4bf4e6dcd9c5f414bf1087cdf101033ec": "0f3981f42699202d0dbd0ce577242c77",
".git/objects/9a/963f9f8e42c2dd6e91bcd9301edff64b0c63ca": "9f1dd4ccc9aa6b4970e836221941bfbe",
".git/objects/9a/5283756799f81ccd112043db1174cf4cc8e9f2": "28014e10e802ddd5045f3ce80bb75ba9",
".git/objects/5d/dbbc038030e7784842ee11cc04ce92a8086cab": "db5c333f94179fac8695f12daa5adb97",
".git/objects/54/8e667e9b8a63f2537f15cd76cd66e7e6642f87": "e5a107928070b472c433ba31a81c473f",
".git/objects/54/817e72c4099489595925540a50852272f86883": "4d7e4a972994f4e3686749392428c912",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/53/553c98f6e3bdf2dd151ee94eb2a4a6539d879e": "c99fd9c5fb752fc07861c98b0ac7a589",
".git/objects/3f/3bf8284f2253083ee4a627b9f1e8fac7292c22": "a2032199dd166cc4bb82f39d7263b0cd",
".git/objects/3f/ca02490daf34cfca1b4238c9535153bec6dbd6": "088e9cb92524b4ea9b6906bd1f99c726",
".git/objects/5e/35e65b7fd650df01ad1de21e4f13f1e10aa0fd": "578adb7e42efb86aa134b9d87d201d8d",
".git/objects/01/bcca7d1c23955f7aeda6a269b1b7f540802096": "635a6822e2a56f7f333d54c66b0234db",
".git/objects/01/65ee96a7cefb30d6fc8820a3878f1d360e94c5": "bae8c2165fd739a38db1189fda1df256",
".git/objects/55/99581dad31dabe617bdc3fa3e77c82e1cae7a3": "b1228de3adde23450508933020c7e5f1",
".git/objects/97/18fe92e1923407ee0faaebbafec05e3e0a49a4": "51d497e01da502ed078e5d45b7e25509",
".git/objects/90/be862f22c94ff11df903e015dccbb7cb65691d": "ca56bca9013361331c628eb02e30e6a9",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/dd/0e4ad04b8884a7c921b7a139ce9e46fec4723d": "a1d32042d72266d012bd89374636c63f",
".git/objects/b6/b81563c6dc47fca7d5bfcd66855b6379a45167": "2c1b8e6cfbaeb6471623b700d6a28c94",
".git/objects/b6/0e570cefe6667cb4aeafb5e2e13c9bb955fdca": "f596cdce35703811cc8406810501caf0",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/ef69eccbffb0b6f0eaf141bfee3f80c4630de4": "ed9c7e438dff96881b4bd62898ff9e3c",
".git/objects/b7/4893aae81f1837e7e346664cac8f60f121cb2b": "7f56060e4b6c1db33f9a93d750b0dd2e",
".git/objects/a8/234e78324011301c932efde8dd789fba10495a": "5ad9ca983e505191e13f526cf3be6ade",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/484d17b98e8aaba18960e51c3fdcbd35d4cc8e": "95f92c5e8405ccc9d477cc1c572d8e39",
".git/objects/c4/86303b13db8ed6ae655668bbe155e0d1520c43": "9bf555db3f4f8cab914cc63fcd6938b9",
".git/objects/ea/a8fc6ce8df58ca06c3b5120a9240c0218be3f7": "8eb72b7dc2a11c22f3e86a38e2c2dde4",
".git/objects/e6/e95ef752dd8fbdb5b080b91ac03288bbec8920": "75a90a6037d0162fd14b2d979ebe1759",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e6/d7d9ce12415bdc41a0d2333ea47e1e82d89657": "fd62e0e53ed150da91803d40fb0594cd",
".git/objects/f7/0d4f5999a9b1782ab937a37586d27da3530d09": "10a316a9af7b7057c1f29a467d7bc3c2",
".git/objects/e8/55dc987b0db3ccd24a8869a087233a0e124f27": "9b242467f4dfe05ce7d2727a68a1ea66",
".git/objects/fa/b779084245b33630e798bb66f73fda38986c8e": "23541f29118b47b5d015f181fd44f283",
".git/objects/f1/38706278cedbb2098c2f2270f172bf8ad3521c": "2c8ed8a6407e18bee747b62941ea7dc3",
".git/objects/2d/583c7dc55bc37f8d5298b0cd48c1e108adef52": "5b7df31ccc8494f4da0573cd4b1777bb",
".git/objects/41/b09e456c1f103a30ff13c447da31c763f1fdd4": "535d2c9d22aaa2592d14b2335813b23e",
".git/objects/83/0e3d19e7f2ff19bbb4b955e3a38e3328837e12": "4412f19a8aebd49e1c2fb821b641e232",
".git/objects/1b/d21e179ee31430e04a094c5b2f7190128d739f": "05540cac5fb6a936bafb9fb2e49364e3",
".git/objects/77/9473ab38a17ee31687f54f24523b3bce3bb6de": "60949c95331b20c4b874278e7877799c",
".git/objects/70/31fa9268ed3b98ee5db1387caff006edb4767e": "e8e77218b0deacfac9d4b29019b5bfd5",
".git/objects/84/865ac26358618f92dfc27545892a3ff4938a53": "c1536f2d1a37db7857b5d5a54d294e3e",
".git/objects/84/091d27cb3bda7f86bcee5dcfcc2d0229a874ae": "b2c11c5a3cfdf7d92627c1ea6606e114",
".git/objects/4a/3cff6e48f0bf6eb4c082f67e684d044863d58d": "51e1054055a181a522e8f8f61a7a3a30",
".git/objects/12/99fef0f3a4f0bb7bdb2d0d054df48f00c03af9": "a9dcfd6adcad7e8132b67166436a36bc",
".git/objects/12/913d5130e1bbd621224bcc165aeebcd3daa731": "cb102365978522449ed7c05a72b0f0b6",
".git/objects/8c/804853b51d0f76527c1ec298d25f3ab35c07bd": "7c2ff19e9e9f46ed5f4b6bf887d12597",
".git/objects/1d/241a89f7c3f98131cfa8dc13485f8195ede136": "2de86ce6cf354553abfe1cfe530bddac",
".git/objects/71/97f705f4d6b1255693551278ba34d84598b7e4": "8781ed36869b0b5da41ec81dbf0d3e13",
".git/objects/71/b81be78c899bbe6b5a9b75a52c1dcf80daa75d": "6276aecfcbb052b3de995724345ce076",
".git/objects/47/986e6f3379a0f4cbba6b264d8c4315de7da6dc": "96929d7fcb4d63ca01c72724b1bbe167",
".git/objects/7f/e32c7c436100cd85e34613c84bd31cf3a2f86e": "4c7473bfc55d890b358e326343bca696",
".git/objects/22/2198e5b658e52b1e8392fa85f81b5b0ad89699": "e183403d82efb1b3e5005d5a49e3526b",
".git/objects/25/18641f3c3ebf27bbdcfac93c343cce36890ae3": "10f7c4ce1f1538055befc06ab1a23f30",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "5305e14cfa68791b9ab6090128433f4f",
".git/logs/refs/heads/main": "837a1c49a8fe5e7c113c4976bda48b76",
".git/logs/refs/remotes/origin/main": "0581187147f70c57734aa78a03fb4d71",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "bf913a23bc59d91f878109bb0440bf8b",
".git/refs/remotes/origin/main": "bf913a23bc59d91f878109bb0440bf8b",
".git/index": "a50a4e6a02981265f4a4eef67c6b2557",
".git/COMMIT_EDITMSG": "dc829bf0d79e690c59cee708b527e6b7",
"assets/AssetManifest.json": "49214e110a0f8e59e3f390fca45146ea",
"assets/NOTICES": "456f369f0105c54c817ea56fa90f20d5",
"assets/FontManifest.json": "8484be2e22347e03dbb53551aa69e191",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/rflutter_alert/assets/images/icon_success.png": "8bb472ce3c765f567aa3f28915c1a8f4",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_success.png": "7d6abdd1b85e78df76b2837996749a43",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_error.png": "2da9704815c606109493d8af19999a65",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_warning.png": "e4606e6910d7c48132912eb818e3a55f",
"assets/packages/rflutter_alert/assets/images/2.0x/icon_info.png": "612ea65413e042e3df408a8548cefe71",
"assets/packages/rflutter_alert/assets/images/2.0x/close.png": "abaa692ee4fa94f76ad099a7a437bd4f",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_success.png": "1c04416085cc343b99d1544a723c7e62",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_error.png": "15ca57e31f94cadd75d8e2b2098239bd",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_warning.png": "e5f369189faa13e7586459afbe4ffab9",
"assets/packages/rflutter_alert/assets/images/3.0x/icon_info.png": "e68e8527c1eb78949351a6582469fe55",
"assets/packages/rflutter_alert/assets/images/3.0x/close.png": "98d2de9ca72dc92b1c9a2835a7464a8c",
"assets/packages/rflutter_alert/assets/images/icon_error.png": "f2b71a724964b51ac26239413e73f787",
"assets/packages/rflutter_alert/assets/images/icon_warning.png": "ccfc1396d29de3ac730da38a8ab20098",
"assets/packages/rflutter_alert/assets/images/icon_info.png": "3f71f68cae4d420cecbf996f37b0763c",
"assets/packages/rflutter_alert/assets/images/close.png": "13c168d8841fcaba94ee91e8adc3617f",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "494fe191cfef97fc77daffaa7ef026d0",
"assets/fonts/MaterialIcons-Regular.otf": "21328fcd4009c5797e09639f02b7bc79",
"assets/assets/images/slide3.jpg": "1f400c674d41e0451fbeaeb944d6bb3f",
"assets/assets/images/slide2.jpg": "bf52047dae00c37deda64266bdb4849e",
"assets/assets/images/slide1.jpg": "cf1cae74f4c5098008eba07555a7eb4f",
"assets/assets/images/service.jpg": "bc797dd59ba4d8ab0bf961ee93d618a6",
"assets/assets/images/compony_map.png": "4e9601b0e21031d8a9fea337363e594b",
"assets/assets/images/account.jpg": "0acb779f79c4ca5de7aa3f1690c74614",
"assets/assets/images/introduce.jpg": "b2c1bb44669551455704ab1e13c33ba6",
"assets/assets/images/payment.jpg": "9c79f98edb6eaf75e69efee73674a247",
"assets/assets/images/onenet_logo.png": "87b29e5dad8ba9a9037c1eff50d9357f",
"assets/assets/images/image1.png": "6b023be7c0025c5f80f6dd7b56a89a79",
"assets/assets/images/banking.jpg": "9b54a71d0262695d909e197a28811b69",
"assets/assets/images/image2.png": "092943eb18166ea1d73314c7cb3d1c07",
"assets/assets/images/image3.png": "2b78324f69752779905d251c4f2a69c7",
"assets/assets/fonts/NotoSansKR/NotoSansKR-Light.otf": "e914a10a1bd0088fb8f743fc7569749f",
"assets/assets/fonts/NotoSansKR/NotoSansKR-Bold.otf": "e2406ff1791c401bc93e73d9e44e6d2b",
"assets/assets/fonts/NotoSansKR/NotoSansKR-Thin.otf": "277434d967d5f33b857fc3f2dbaff15b",
"assets/assets/fonts/NotoSansKR/NotoSansKR-Black.otf": "05c077164c27fa722dcafe63ed38355e",
"assets/assets/fonts/NotoSansKR/NotoSansKR-Medium.otf": "32666ae307200b0bcab5553590672bb1",
"assets/assets/fonts/NotoSansKR/NotoSansKR-Regular.otf": "210989664066c01d8ffdbdf56bb773cd",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
