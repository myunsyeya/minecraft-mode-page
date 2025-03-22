// 모드 데이터
const modData = {
    server: [
        {
            name: "Traveler's Backpack",
            id: "travelersbackpack",
            url: "https://modrinth.com/mod/travelersbackpack",
            description: "다양한 특수 능력을 가진 배낭을 추가하는 모드입니다.",
            versions: [],
            loaders: []
        },
        {
            name: "Dungeons and Taverns",
            id: "dungeons-and-taverns",
            url: "https://modrinth.com/datapack/dungeons-and-taverns",
            description: "던전과 주점을 추가하는 데이터팩입니다.",
            versions: []
        },
        {
            name: "Easy Anvils",
            id: "easy-anvils",
            url: "https://modrinth.com/mod/easy-anvils",
            description: "모루 사용을 개선하고 수리 비용을 줄이는 모드입니다.",
            versions: []
        },
        {
            name: "Iron's Spells n Spellbooks",
            id: "irons-spells-n-spellbooks",
            url: "https://modrinth.com/mod/irons-spells-n-spellbooks",
            description: "마법과 주문서를 추가하는 RPG 모드입니다.",
            versions: []
        },
        {
            name: "Expanded Delight",
            id: "expanded-delight",
            url: "https://modrinth.com/mod/expanded-delight",
            description: "Farmer's Delight에 추가 음식과 작물을 추가합니다.",
            versions: []
        },
        {
            name: "End's Delight",
            id: "ends-delight",
            url: "https://modrinth.com/mod/ends-delight",
            description: "엔드 테마의 음식과 요리 관련 모드입니다.",
            versions: []
        },
        {
            name: "Crabber's Delight",
            id: "crabbers-delight",
            url: "https://modrinth.com/mod/crabbers-delight",
            description: "게와 해산물 관련 음식을 추가합니다.",
            versions: []
        },
        {
            name: "Crate Delight",
            id: "crate-delight",
            url: "https://modrinth.com/mod/crate-delight",
            description: "작물과 음식을 저장할 수 있는 상자를 추가합니다.",
            versions: []
        },
        {
            name: "Storage Delight",
            id: "storage-delight",
            url: "https://modrinth.com/mod/storage-delight",
            description: "음식과 재료를 저장하는 다양한 방법을 추가합니다.",
            versions: []
        },
        {
            name: "Cuisine Delight",
            id: "cuisine-delight",
            url: "https://modrinth.com/mod/cuisine-delight",
            description: "다양한 음식과 요리법을 추가합니다.",
            versions: []
        },
        {
            name: "More Delight",
            id: "more-delight",
            url: "https://modrinth.com/mod/more-delight",
            description: "Farmer's Delight에 더 많은 음식과 작물을 추가합니다.",
            versions: []
        },
        {
            name: "Right Click Harvest",
            id: "rightclickharvest",
            url: "https://modrinth.com/mod/rightclickharvest",
            description: "우클릭으로 작물을 수확할 수 있게 합니다.",
            versions: []
        },
        {
            name: "Smarter Farmers",
            id: "smarter-farmers-farmers-replant",
            url: "https://modrinth.com/mod/smarter-farmers-farmers-replant",
            description: "농부 주민이 자동으로 작물을 심고 수확하도록 개선합니다.",
            versions: []
        },
        {
            name: "AppleSkin",
            id: "appleskin",
            url: "https://modrinth.com/mod/appleskin",
            description: "음식의 배고픔과 포화도 정보를 자세히 표시합니다.",
            versions: []
        },
        {
            name: "Death Finder",
            id: "death-finder",
            url: "https://modrinth.com/mod/death-finder",
            description: "죽은 위치를 쉽게 찾을 수 있도록 도와주는 모드입니다.",
            versions: []
        },
        {
            name: "Ferrite Core",
            id: "ferrite-core",
            url: "https://modrinth.com/mod/ferrite-core",
            description: "메모리 사용량을 최적화하는 모드입니다.",
            versions: []
        },
        {
            name: "Curios API",
            id: "curios",
            url: "https://modrinth.com/mod/curios",
            description: "유연하고 확장 가능한 액세서리/장비 API 모드입니다.",
            versions: [],
            loaders: []
        },
        {
            name: "Cloth Config API",
            id: "cloth-config",
            url: "https://modrinth.com/mod/cloth-config",
            description: "마인크래프트 모드를 위한 설정 화면 API입니다.",
            versions: [],
            loaders: []
        },
        {
            name: "Puzzles Lib",
            id: "puzzles-lib",
            url: "https://modrinth.com/mod/puzzles-lib",
            description: "다양한 프레임워크와 유틸리티 클래스를 제공하는 라이브러리 모드입니다.",
            versions: [],
            loaders: []
        },
        {
            name: "playerAnimator",
            id: "playeranimator",
            url: "https://modrinth.com/mod/playeranimator",
            description: "키프레임을 사용해 플레이어를 애니메이션화하는 라이브러리입니다.",
            versions: [],
            loaders: []
        },
        {
            name: "Geckolib",
            id: "geckolib",
            url: "https://modrinth.com/mod/geckolib",
            description: "엔티티, 블록, 아이템, 방어구 등을 위한 3D 애니메이션 라이브러리입니다.",
            versions: [],
            loaders: []
        },
        {
            name: "Farmer's Delight",
            id: "farmers-delight",
            url: "https://modrinth.com/mod/farmers-delight",
            description: "농사와 요리를 확장하는 아늑한 모드입니다.",
            versions: [],
            loaders: []
        },
        {
            name: "Immersive Aircraft",
            id: "immersive-aircraft",
            url: "https://modrinth.com/mod/immersive-aircraft",
            description: "여행, 운송 및 탐험을 위한 소박한 항공기를 추가하는 모드입니다.",
            versions: [],
            loaders: []
        },
        {
            name: "BetterTrims",
            id: "bettertrims",
            url: "https://modrinth.com/mod/bettertrims",
            description: "방어구 트림에 고유한 효과를 부여하는 모드입니다.",
            versions: [],
            loaders: []
        },
        {
            name: "Forgified Fabric API",
            id: "forgified-fabric-api",
            url: "https://modrinth.com/mod/forgified-fabric-api",
            description: "NeoForge 위에서 Fabric API를 구현한 라이브러리입니다.",
            versions: [],
            loaders: []
        },
        {
            name: "Architectury API",
            id: "architectury-api",
            url: "https://modrinth.com/mod/architectury-api",
            description: "Fabric, Forge, NeoForge에서 mod 개발을 쉽게 해주는 라이브러리입니다.",
            versions: [],
            loaders: []
        },
        {
            name: "JamLib",
            id: "jamlib",
            url: "https://modrinth.com/mod/jamlib",
            description: "다양한 Java 유틸리티를 제공하는 라이브러리입니다.",
            versions: [],
            loaders: []
        },
        {
            name: "Moonlight",
            id: "moonlight",
            url: "https://modrinth.com/mod/moonlight",
            description: "여러 기능을 제공하는 라이브러리 모드입니다.",
            versions: [],
            loaders: []
        },
        {
            name: "Configurable",
            id: "configurable",
            url: "https://modrinth.com/mod/configurable",
            description: "모드에서 분산된 설정을 가능하게 하는 설정 라이브러리입니다.",
            versions: [],
            loaders: []
        },
        {
            name: "YetAnotherConfigLib (YACL)",
            id: "yacl",
            url: "https://modrinth.com/mod/yacl",
            description: "마인크래프트를 위한 빌더 기반 설정 라이브러리입니다.",
            versions: [],
            loaders: []
        }
    ],
    client: [
        {
            name: "Traveler's Backpack",
            id: "travelersbackpack",
            url: "https://modrinth.com/mod/travelersbackpack",
            description: "다양한 특수 능력을 가진 배낭을 추가하는 모드입니다.",
            versions: [],
            loaders: []
        },
        {
            name: "Easy Anvils",
            id: "easy-anvils",
            url: "https://modrinth.com/mod/easy-anvils",
            description: "모루 사용을 개선하고 수리 비용을 줄이는 모드입니다.",
            versions: []
        },
        {
            name: "Iron's Spells n Spellbooks",
            id: "irons-spells-n-spellbooks",
            url: "https://modrinth.com/mod/irons-spells-n-spellbooks",
            description: "마법과 주문서를 추가하는 RPG 모드입니다.",
            versions: []
        },
        {
            name: "Expanded Delight",
            id: "expanded-delight",
            url: "https://modrinth.com/mod/expanded-delight",
            description: "Farmer's Delight에 추가 음식과 작물을 추가합니다.",
            versions: []
        },
        {
            name: "End's Delight",
            id: "ends-delight",
            url: "https://modrinth.com/mod/ends-delight",
            description: "엔드 테마의 음식과 요리 관련 모드입니다.",
            versions: []
        },
        {
            name: "Crabber's Delight",
            id: "crabbers-delight",
            url: "https://modrinth.com/mod/crabbers-delight",
            description: "게와 해산물 관련 음식을 추가합니다.",
            versions: []
        },
        {
            name: "Crate Delight",
            id: "crate-delight",
            url: "https://modrinth.com/mod/crate-delight",
            description: "작물과 음식을 저장할 수 있는 상자를 추가합니다.",
            versions: []
        },
        {
            name: "Storage Delight",
            id: "storage-delight",
            url: "https://modrinth.com/mod/storage-delight",
            description: "음식과 재료를 저장하는 다양한 방법을 추가합니다.",
            versions: []
        },
        {
            name: "Cuisine Delight",
            id: "cuisine-delight",
            url: "https://modrinth.com/mod/cuisine-delight",
            description: "다양한 음식과 요리법을 추가합니다.",
            versions: []
        },
        {
            name: "More Delight",
            id: "more-delight",
            url: "https://modrinth.com/mod/more-delight",
            description: "Farmer's Delight에 더 많은 음식과 작물을 추가합니다.",
            versions: []
        },
        {
            name: "AppleSkin",
            id: "appleskin",
            url: "https://modrinth.com/mod/appleskin",
            description: "음식의 배고픔과 포화도 정보를 자세히 표시합니다.",
            versions: []
        },
        {
            name: "Better F3",
            id: "betterf3",
            url: "https://modrinth.com/mod/betterf3",
            description: "F3 디버그 화면을 더 보기 좋게 개선합니다.",
            versions: []
        },
        {
            name: "Chat Heads",
            id: "chat-heads",
            url: "https://modrinth.com/mod/chat-heads",
            description: "채팅에 플레이어 얼굴 아이콘을 표시합니다.",
            versions: []
        },
        {
            name: "Death Finder",
            id: "death-finder",
            url: "https://modrinth.com/mod/death-finder",
            description: "죽은 위치를 쉽게 찾을 수 있도록 도와주는 모드입니다.",
            versions: []
        },
        {
            name: "Dynamic FPS",
            id: "dynamic-fps",
            url: "https://modrinth.com/mod/dynamic-fps/versions",
            description: "게임이 백그라운드일 때 FPS를 제한하여 컴퓨터 자원을 절약합니다.",
            versions: []
        },
        {
            name: "Ferrite Core",
            id: "ferrite-core",
            url: "https://modrinth.com/mod/ferrite-core",
            description: "메모리 사용량을 최적화하는 모드입니다.",
            versions: []
        },
        {
            name: "Korean Chat Patch",
            id: "korean-chat-patch",
            url: "https://modrinth.com/mod/korean-chat-patch/versions?page=2",
            description: "채팅에서 한글 입력 관련 문제를 수정합니다.",
            versions: []
        },
        {
            name: "3D Skin Layers",
            id: "3dskinlayers",
            url: "https://modrinth.com/mod/3dskinlayers",
            description: "플레이어 스킨의 외부 레이어를 3D로 렌더링합니다.",
            versions: []
        },
        {
            name: "Stylish Effects",
            id: "stylish-effects",
            url: "https://modrinth.com/mod/stylish-effects",
            description: "상태 효과 아이콘 디자인을 개선합니다.",
            versions: []
        },
        {
            name: "Xaero's World Map",
            id: "xaeros-world-map",
            url: "https://modrinth.com/mod/xaeros-world-map",
            description: "전체 월드 맵을 제공하는 미니맵 모드입니다.",
            versions: []
        },
        {
            name: "Curios API",
            id: "curios",
            url: "https://modrinth.com/mod/curios",
            description: "유연하고 확장 가능한 액세서리/장비 API 모드입니다.",
            versions: [],
            loaders: []
        },
        {
            name: "Cloth Config API",
            id: "cloth-config",
            url: "https://modrinth.com/mod/cloth-config",
            description: "마인크래프트 모드를 위한 설정 화면 API입니다.",
            versions: [],
            loaders: []
        },
        {
            name: "Puzzles Lib",
            id: "puzzles-lib",
            url: "https://modrinth.com/mod/puzzles-lib",
            description: "다양한 프레임워크와 유틸리티 클래스를 제공하는 라이브러리 모드입니다.",
            versions: [],
            loaders: []
        },
        {
            name: "playerAnimator",
            id: "playeranimator",
            url: "https://modrinth.com/mod/playeranimator",
            description: "키프레임을 사용해 플레이어를 애니메이션화하는 라이브러리입니다.",
            versions: [],
            loaders: []
        },
        {
            name: "Geckolib",
            id: "geckolib",
            url: "https://modrinth.com/mod/geckolib",
            description: "엔티티, 블록, 아이템, 방어구 등을 위한 3D 애니메이션 라이브러리입니다.",
            versions: [],
            loaders: []
        },
        {
            name: "Farmer's Delight",
            id: "farmers-delight",
            url: "https://modrinth.com/mod/farmers-delight",
            description: "농사와 요리를 확장하는 아늑한 모드입니다.",
            versions: [],
            loaders: []
        },
        {
            name: "Immersive Aircraft",
            id: "immersive-aircraft",
            url: "https://modrinth.com/mod/immersive-aircraft",
            description: "여행, 운송 및 탐험을 위한 소박한 항공기를 추가하는 모드입니다.",
            versions: [],
            loaders: []
        },
        {
            name: "BetterTrims",
            id: "bettertrims",
            url: "https://modrinth.com/mod/bettertrims",
            description: "방어구 트림에 고유한 효과를 부여하는 모드입니다.",
            versions: [],
            loaders: []
        },
        {
            name: "Forgified Fabric API",
            id: "forgified-fabric-api",
            url: "https://modrinth.com/mod/forgified-fabric-api",
            description: "NeoForge 위에서 Fabric API를 구현한 라이브러리입니다.",
            versions: [],
            loaders: []
        },
        {
            name: "YetAnotherConfigLib (YACL)",
            id: "yacl",
            url: "https://modrinth.com/mod/yacl",
            description: "마인크래프트를 위한 빌더 기반 설정 라이브러리입니다.",
            versions: [],
            loaders: []
        },
        {
            name: "Architectury API",
            id: "architectury-api",
            url: "https://modrinth.com/mod/architectury-api",
            description: "Fabric, Forge, NeoForge에서 mod 개발을 쉽게 해주는 라이브러리입니다.",
            versions: [],
            loaders: []
        },
        {
            name: "JamLib",
            id: "jamlib",
            url: "https://modrinth.com/mod/jamlib",
            description: "다양한 Java 유틸리티를 제공하는 라이브러리입니다.",
            versions: [],
            loaders: []
        },
        {
            name: "Moonlight",
            id: "moonlight",
            url: "https://modrinth.com/mod/moonlight",
            description: "여러 기능을 제공하는 라이브러리 모드입니다.",
            versions: [],
            loaders: []
        }
    ]
};

// 선택된 모드 저장소
const selectedMods = {
    server: [],
    client: []
};

// 공통 버전 관리
let commonVersions = [];
let allVersions = [];
let supportedLoaders = ['fabric', 'forge', 'neoforge', 'quilt'];
let selectedLoader = '';

// DOM 요소
const searchInput = document.getElementById('search-input');
const versionSelect = document.getElementById('version-select');
const loaderSelect = document.getElementById('loader-select');
const serverModsContainer = document.querySelector('#server-mods .mods');
const clientModsContainer = document.querySelector('#client-mods .mods');
const selectedModsContainer = document.querySelector('#selected-mods .mods');
const tabButtons = document.querySelectorAll('.tab-btn');
const modLists = document.querySelectorAll('.mod-list');
const selectAllBtn = document.getElementById('select-all');
const deselectAllBtn = document.getElementById('deselect-all');
const downloadSelectedBtn = document.getElementById('download-selected');

// API에서 모드 정보 가져오기
async function fetchModVersions(mod) {
    try {
        const response = await fetch(`https://api.modrinth.com/v2/project/${mod.id}/version`);
        if (!response.ok) {
            throw new Error(`API 요청 실패: ${response.statusText}`);
        }
        const data = await response.json();
        
        // 게임 버전 정보 추출
        const gameVersions = new Set();
        // 로더 정보 추출
        const loaders = new Set();
        
        data.forEach(version => {
            version.game_versions.forEach(gameVersion => {
                // 주요 버전만 필터링 (예: 1.20.1, 1.19.4 등)
                if (/^1\.\d+\.\d+$/.test(gameVersion)) {
                    gameVersions.add(gameVersion);
                }
            });
            
            // 로더 정보 추출
            if (version.loaders && version.loaders.length > 0) {
                version.loaders.forEach(loader => {
                    loaders.add(loader);
                });
            }
        });
        
        // 모드에 로더 정보 저장
        mod.loaders = Array.from(loaders);
        
        // 정렬된 버전 반환
        return Array.from(gameVersions).sort(compareVersions);
    } catch (error) {
        console.error(`${mod.name} 버전 정보 가져오기 실패:`, error);
        return [];
    }
}

// 특정 버전과 로더의 모드 다운로드 URL 가져오기
async function fetchModDownloadUrl(mod, gameVersion, loader) {
    try {
        const response = await fetch(`https://api.modrinth.com/v2/project/${mod.id}/version`);
        if (!response.ok) {
            throw new Error(`API 요청 실패: ${response.statusText}`);
        }
        const versions = await response.json();
        
        // 게임 버전 필터링 - 정확히 일치하는 버전만 사용
        let compatibleVersions = versions.filter(version => 
            version.game_versions.includes(gameVersion)
        );
        
        // 로더 필터링 - 선택된 로더가 있는 경우에만 해당 로더 버전만 필터링
        if (loader) {
            compatibleVersions = compatibleVersions.filter(version => 
                version.loaders && version.loaders.includes(loader)
            );
        }
        
        if (compatibleVersions.length === 0) {
            return null; // 지원하는 버전이 없음
        }
        
        // 가장 최신 버전 (배열이 날짜 내림차순으로 정렬되어 있음)
        const latestVersion = compatibleVersions[0];
        
        // 다운로드 URL (보통 첫 번째 파일이 주요 파일)
        if (latestVersion.files && latestVersion.files.length > 0) {
            const primaryFile = latestVersion.files.find(file => file.primary) || latestVersion.files[0];
            return {
                url: primaryFile.url,
                filename: primaryFile.filename,
                versionNumber: latestVersion.version_number,
                loaders: latestVersion.loaders
            };
        }
        
        return null;
    } catch (error) {
        console.error(`${mod.name}의 다운로드 URL 가져오기 실패:`, error);
        return null;
    }
}

// 모든 모드의 버전 정보 가져오기
async function fetchAllModVersions() {
    const loadingMessage = document.createElement('div');
    loadingMessage.className = 'loading-message';
    loadingMessage.textContent = '모드 정보를 가져오는 중...';
    document.querySelector('.container').insertBefore(loadingMessage, document.querySelector('.mod-container'));
    
    // 중복 요청 방지를 위한 Map (ID를 키로 사용)
    const processedMods = new Map();
    
    // 서버 모드 버전 정보 가져오기
    const serverPromises = modData.server.map(async mod => {
        if (!processedMods.has(mod.id)) {
            mod.versions = await fetchModVersions(mod);
            processedMods.set(mod.id, mod.versions);
        } else {
            mod.versions = processedMods.get(mod.id);
        }
        return mod.versions;
    });
    
    // 클라이언트 모드 버전 정보 가져오기
    const clientPromises = modData.client.map(async mod => {
        if (!processedMods.has(mod.id)) {
            mod.versions = await fetchModVersions(mod);
            processedMods.set(mod.id, mod.versions);
        } else {
            mod.versions = processedMods.get(mod.id);
        }
        return mod.versions;
    });
    
    // 모든 요청 기다리기
    const serverVersions = await Promise.all(serverPromises);
    const clientVersions = await Promise.all(clientPromises);
    
    // 로딩 메시지 제거
    loadingMessage.remove();
    
    // 공통 버전 찾기
    findCommonVersions(serverVersions, clientVersions);
    
    // 버전 선택 드롭다운 업데이트
    updateVersionDropdown();
    
    // 모드 렌더링
    renderMods('server', modData.server);
    renderMods('client', modData.client);
}

// 공통 버전 찾기
function findCommonVersions(serverVersions, clientVersions) {
    // 1. 모든 서버 모드가 지원하는 버전 찾기 (교집합)
    let serverCommonVersions = new Set(serverVersions[0] || []);
    for (let i = 1; i < serverVersions.length; i++) {
        serverCommonVersions = new Set(
            [...serverCommonVersions].filter(version => 
                serverVersions[i].includes(version)
            )
        );
    }
    
    // 2. 모든 클라이언트 모드가 지원하는 버전 찾기 (교집합)
    let clientCommonVersions = new Set(clientVersions[0] || []);
    for (let i = 1; i < clientVersions.length; i++) {
        clientCommonVersions = new Set(
            [...clientCommonVersions].filter(version => 
                clientVersions[i].includes(version)
            )
        );
    }
    
    // 3. 서버와 클라이언트 공통 버전 찾기 (교집합)
    commonVersions = [...serverCommonVersions].filter(version => 
        clientCommonVersions.has(version)
    ).sort(compareVersions);

    // 4. 모든 버전 합집합 구하기
    const allVersionsSet = new Set();
    
    // 서버 모드의 모든 버전 추가
    serverVersions.forEach(versions => {
        versions.forEach(version => allVersionsSet.add(version));
    });
    
    // 클라이언트 모드의 모든 버전 추가
    clientVersions.forEach(versions => {
        versions.forEach(version => allVersionsSet.add(version));
    });
    
    // 정렬된 버전 배열로 변환
    allVersions = [...allVersionsSet].sort(compareVersions);
    
    // 5. 지원하는 로더 찾기
    updateSupportedLoaders();
}

// 지원되는, 모든 모드에 공통인 로더 찾기
function updateSupportedLoaders() {
    const allLoaders = new Set();
    
    // 서버 모드의 모든 로더
    modData.server.forEach(mod => {
        if (mod.loaders && mod.loaders.length > 0) {
            mod.loaders.forEach(loader => allLoaders.add(loader));
        }
    });
    
    // 클라이언트 모드의 모든 로더
    modData.client.forEach(mod => {
        if (mod.loaders && mod.loaders.length > 0) {
            mod.loaders.forEach(loader => allLoaders.add(loader));
        }
    });
    
    // 지원하는 로더 업데이트
    supportedLoaders = [...allLoaders].sort();
    
    // 로더 선택 드롭다운 업데이트
    updateLoaderDropdown();
}

// 버전 비교 함수
function compareVersions(a, b) {
    const [aMajor, aMinor, aPatch] = a.split('.').map(Number);
    const [bMajor, bMinor, bPatch] = b.split('.').map(Number);
    
    if (aMajor !== bMajor) return bMajor - aMajor;
    if (aMinor !== bMinor) return bMinor - aMinor;
    return bPatch - aPatch;
}

// 버전 선택 드롭다운 업데이트
function updateVersionDropdown() {
    versionSelect.innerHTML = '<option value="">모든 버전</option>';
    
    // 모든 버전 옵션 추가 (합집합)
    allVersions.forEach(version => {
        const option = document.createElement('option');
        option.value = version;
        option.textContent = version;
        versionSelect.appendChild(option);
    });
    
    // 공통 버전 표시 (좋음 표시 추가)
    Array.from(versionSelect.options).forEach(option => {
        if (option.value && commonVersions.includes(option.value)) {
            option.textContent += ' (모든 모드 지원)';
        }
    });
}

// 로더 선택 드롭다운 업데이트
function updateLoaderDropdown() {
    loaderSelect.innerHTML = '<option value="">모든 로더</option>';
    
    // 지원하는 로더 옵션 추가
    supportedLoaders.forEach(loader => {
        const option = document.createElement('option');
        option.value = loader;
        
        // 로더 이름 표시 (첫 글자 대문자로)
        let displayName = loader.charAt(0).toUpperCase() + loader.slice(1);
        if (loader === 'neoforge') displayName = 'NeoForge';
        if (loader === 'quilt') displayName = 'Quilt';
        
        option.textContent = displayName;
        loaderSelect.appendChild(option);
    });
}

// 초기 모드 표시
async function initializeMods() {
    await fetchAllModVersions();
    updateSelectedModsView();
}

// 모드 렌더링 함수
function renderMods(type, mods) {
    const container = type === 'server' ? serverModsContainer : clientModsContainer;
    container.innerHTML = '';

    const filteredMods = filterMods(mods);
    
    if (filteredMods.length === 0) {
        container.innerHTML = '<p class="no-mods">검색 결과가 없습니다.</p>';
        return;
    }

    filteredMods.forEach(mod => {
        const isSelected = selectedMods[type].some(m => m.name === mod.name);
        const selectedVersion = versionSelect.value;
        const selectedLoader = loaderSelect.value;
        
        const isVersionSupported = !selectedVersion || mod.versions.includes(selectedVersion);
        const isLoaderSupported = !selectedLoader || (mod.loaders && mod.loaders.includes(selectedLoader));
        
        const modCard = createModCard(mod, type, isSelected, isVersionSupported && isLoaderSupported);
        container.appendChild(modCard);
    });
}

// 모드 카드 생성 함수
function createModCard(mod, type, isSelected, isSupported) {
    const modCard = document.createElement('div');
    modCard.className = 'mod-card';
    
    // 선택된 버전/로더를 지원하지 않는 경우 클래스 추가
    if (!isSupported) {
        modCard.classList.add('unsupported-version');
    }
    
    const modHeader = document.createElement('div');
    modHeader.className = 'mod-header';
    
    const checkbox = document.createElement('div');
    checkbox.className = 'checkbox-container';
    
    const checkboxInput = document.createElement('input');
    checkboxInput.type = 'checkbox';
    checkboxInput.checked = isSelected;
    checkboxInput.addEventListener('change', () => {
        toggleModSelection(mod, type);
    });
    
    checkbox.appendChild(checkboxInput);
    
    const title = document.createElement('div');
    title.className = 'mod-title';
    title.textContent = mod.name;
    
    modHeader.appendChild(checkbox);
    modHeader.appendChild(title);
    
    const modContent = document.createElement('div');
    modContent.className = 'mod-content';
    
    const description = document.createElement('div');
    description.className = 'mod-description';
    description.textContent = mod.description;
    
    modContent.appendChild(description);
    
    const modFooter = document.createElement('div');
    modFooter.className = 'mod-footer';
    
    const version = document.createElement('div');
    version.className = 'mod-version';
    
    // 버전 정보가 너무 길 경우 처리
    const selectedVersion = versionSelect.value;
    const displayVersions = selectedVersion 
        ? [selectedVersion]
        : mod.versions.length > 5 
            ? [...mod.versions.slice(0, 5), `외 ${mod.versions.length - 5}개`] 
            : mod.versions;
    
    version.textContent = `지원 버전: ${displayVersions.join(', ')}`;
    
    // 로더 정보 표시
    const loaderInfo = document.createElement('div');
    loaderInfo.className = 'mod-loaders';
    
    // 로더 정보 표시 (최대 3개)
    if (mod.loaders && mod.loaders.length > 0) {
        const displayLoaders = mod.loaders.length > 3 
            ? [...mod.loaders.slice(0, 3), `외 ${mod.loaders.length - 3}개`] 
            : mod.loaders;
        
        // 로더 이름 첫 글자 대문자로
        const formattedLoaders = displayLoaders.map(loader => {
            if (typeof loader !== 'string') return loader;
            return loader.charAt(0).toUpperCase() + loader.slice(1);
        });
        
        loaderInfo.textContent = `지원 로더: ${formattedLoaders.join(', ')}`;
    } else {
        loaderInfo.textContent = '지원 로더: 정보 없음';
    }
    
    // 지원하지 않는 버전이나 로더가 선택된 경우 경고 메시지 추가
    if (!isSupported) {
        const warningMsg = document.createElement('div');
        warningMsg.className = 'version-warning';
        
        // 경고 메시지 구체화
        if (selectedVersion && !mod.versions.includes(selectedVersion)) {
            warningMsg.textContent = `⚠️ ${selectedVersion} 버전을 지원하지 않습니다`;
        } else if (selectedLoader && (!mod.loaders || !mod.loaders.includes(selectedLoader))) {
            warningMsg.textContent = `⚠️ ${selectedLoader.charAt(0).toUpperCase() + selectedLoader.slice(1)} 로더를 지원하지 않습니다`;
        } else {
            warningMsg.textContent = '⚠️ 선택한 버전과 로더 조합을 지원하지 않습니다';
        }
        
        modContent.appendChild(warningMsg);
    }
    
    const link = document.createElement('a');
    link.className = 'mod-link';
    link.href = mod.url;
    link.target = '_blank';
    link.textContent = '모드페이지';
    
    modFooter.appendChild(version);
    modFooter.appendChild(loaderInfo); // 로더 정보 추가
    modFooter.appendChild(link);
    
    modCard.appendChild(modHeader);
    modCard.appendChild(modContent);
    modCard.appendChild(modFooter);
    
    return modCard;
}

// 필터링 함수
function filterMods(mods) {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedVersion = versionSelect.value;
    const selectedLoader = loaderSelect.value;

    return mods.filter(mod => {
        const nameMatch = mod.name.toLowerCase().includes(searchTerm);
        const descriptionMatch = mod.description.toLowerCase().includes(searchTerm);
        
        // 로더 호환성 확인 (선택된 경우에만)
        let loaderMatch = true;
        if (selectedLoader && mod.loaders) {
            loaderMatch = mod.loaders.includes(selectedLoader);
        }
        
        return (nameMatch || descriptionMatch) && loaderMatch;
    });
}

// 모드 선택/해제 토글
function toggleModSelection(mod, type) {
    const index = selectedMods[type].findIndex(m => m.name === mod.name);
    
    if (index === -1) {
        selectedMods[type].push(mod);
    } else {
        selectedMods[type].splice(index, 1);
    }
    
    updateSelectedModsView();
}

// 선택된 모드 뷰 업데이트
function updateSelectedModsView() {
    selectedModsContainer.innerHTML = '';
    
    const allSelected = [...selectedMods.server, ...selectedMods.client];
    
    if (allSelected.length === 0) {
        selectedModsContainer.innerHTML = '<p class="no-mods">선택된 모드가 없습니다.</p>';
        return;
    }
    
    // 선택된 버전 정보
    const selectedVersion = versionSelect.value;
    
    // 서버 모드 표시
    if (selectedMods.server.length > 0) {
        const serverHeader = document.createElement('div');
        serverHeader.className = 'selected-category';
        serverHeader.textContent = '서버 모드';
        selectedModsContainer.appendChild(serverHeader);
        
        selectedMods.server.forEach(mod => {
            const isVersionSupported = !selectedVersion || mod.versions.includes(selectedVersion);
            const modCard = createModCard(mod, 'server', true, isVersionSupported);
            selectedModsContainer.appendChild(modCard);
        });
    }
    
    // 클라이언트 모드 표시
    if (selectedMods.client.length > 0) {
        const clientHeader = document.createElement('div');
        clientHeader.className = 'selected-category';
        clientHeader.textContent = '클라이언트 모드';
        selectedModsContainer.appendChild(clientHeader);
        
        selectedMods.client.forEach(mod => {
            const isVersionSupported = !selectedVersion || mod.versions.includes(selectedVersion);
            const modCard = createModCard(mod, 'client', true, isVersionSupported);
            selectedModsContainer.appendChild(modCard);
        });
    }
}

// 탭 전환
function switchTab(tabId) {
    tabButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.tab === tabId) {
            btn.classList.add('active');
        }
    });
    
    modLists.forEach(list => {
        list.classList.remove('active');
        if (list.id === `${tabId}-mods`) {
            list.classList.add('active');
        }
    });
}

// 전체 선택 함수
function selectAll() {
    const activeTab = document.querySelector('.tab-btn.active').dataset.tab;
    
    if (activeTab === 'server') {
        modData.server.forEach(mod => {
            if (!selectedMods.server.some(m => m.name === mod.name)) {
                selectedMods.server.push(mod);
            }
        });
        renderMods('server', modData.server);
    } else if (activeTab === 'client') {
        modData.client.forEach(mod => {
            if (!selectedMods.client.some(m => m.name === mod.name)) {
                selectedMods.client.push(mod);
            }
        });
        renderMods('client', modData.client);
    }
    
    updateSelectedModsView();
}

// 전체 해제 함수
function deselectAll() {
    const activeTab = document.querySelector('.tab-btn.active').dataset.tab;
    
    if (activeTab === 'server') {
        selectedMods.server = [];
        renderMods('server', modData.server);
    } else if (activeTab === 'client') {
        selectedMods.client = [];
        renderMods('client', modData.client);
    } else if (activeTab === 'selected') {
        selectedMods.server = [];
        selectedMods.client = [];
        renderMods('server', modData.server);
        renderMods('client', modData.client);
        updateSelectedModsView();
    }
    
    updateSelectedModsView();
}

// 선택된 모드 다운로드 함수
async function downloadSelectedMods() {
    const selectedVersion = versionSelect.value;
    const selectedLoader = loaderSelect.value;
    const allSelected = [...selectedMods.server, ...selectedMods.client];
    
    if (allSelected.length === 0) {
        alert('다운로드할 모드를 선택해주세요.');
        return;
    }
    
    if (!selectedVersion) {
        alert('특정 버전을 선택해주세요.');
        return;
    }
    
    if (!selectedLoader) {
        alert('모드 로더(Fabric, Forge, NeoForge 등)를 선택해주세요.');
        return;
    }
    
    // 로딩 메시지 표시
    const loadingMessage = document.createElement('div');
    loadingMessage.className = 'loading-message';
    loadingMessage.textContent = '다운로드 링크를 가져오는 중...';
    document.querySelector('.container').appendChild(loadingMessage);
    
    try {
        // 서버 모드 다운로드 정보 가져오기
        const serverDownloads = await Promise.all(
            selectedMods.server.map(async mod => {
                // 버전과 로더 모두 지원하는지 확인
                if (mod.versions.includes(selectedVersion) && 
                    mod.loaders && mod.loaders.includes(selectedLoader)) {
                    return {
                        mod: mod,
                        downloadInfo: await fetchModDownloadUrl(mod, selectedVersion, selectedLoader)
                    };
                }
                return {
                    mod: mod,
                    downloadInfo: null
                };
            })
        );
        
        // 클라이언트 모드 다운로드 정보 가져오기
        const clientDownloads = await Promise.all(
            selectedMods.client.map(async mod => {
                // 버전과 로더 모두 지원하는지 확인
                if (mod.versions.includes(selectedVersion) && 
                    mod.loaders && mod.loaders.includes(selectedLoader)) {
                    return {
                        mod: mod,
                        downloadInfo: await fetchModDownloadUrl(mod, selectedVersion, selectedLoader)
                    };
                }
                return {
                    mod: mod,
                    downloadInfo: null
                };
            })
        );
        
        // 로딩 메시지 제거
        loadingMessage.remove();
        
        // 다운로드 가능한 모드와 불가능한 모드 분류
        const downloadable = [...serverDownloads, ...clientDownloads].filter(item => item.downloadInfo);
        const notDownloadable = [...serverDownloads, ...clientDownloads].filter(item => !item.downloadInfo);
        
        // 다운로드 가능한 모드가 없는 경우
        if (downloadable.length === 0) {
            alert(`선택한 모드 중 ${selectedVersion} 버전과 ${selectedLoader} 로더를 지원하는 모드가 없습니다.`);
            return;
        }
        
        // 앱 환경인지 확인 (PyWebView가 있는지 확인)
        const isAppEnvironment = typeof window.pywebview !== 'undefined';
        
        // 다운로드 처리
        if (isAppEnvironment) {
            // 다운로드 URL 리스트 추출
            const downloadUrls = downloadable.map(item => item.downloadInfo.url);
            const modNames = downloadable.map(item => item.mod.name);
            
            // 사용자에게 알림
            alert(`${downloadUrls.length}개의 모드를 다운로드합니다. 각 다운로드 링크가 브라우저에서 열립니다.`);
            
            try {
                // 각 URL을 개별적으로 열기
                let openCount = 0;
                
                // 사용자 확인 후 진행
                if (confirm('다운로드를 시작하시겠습니까? 브라우저에서 여러 창이 열립니다.')) {
                    // 각 URL을 새 창에서 열기
                    downloadUrls.forEach((url, index) => {
                        try {
                            const modName = modNames[index];
                            console.log(`${modName} 다운로드 링크 열기: ${url}`);
                            window.open(url, '_blank');
                            openCount++;
                            
                            // 과부하 방지를 위해 잠시 대기 (각 다운로드 간 0.5초)
                            // setTimeout은 비동기이므로 클로저를 사용해 이벤트 루프가 계속 진행되게 함
                        } catch (error) {
                            console.error(`URL 열기 실패: ${url}`, error);
                        }
                    });
                    
                    // 팝업 차단 확인
                    setTimeout(() => {
                        if (openCount === 0) {
                            alert('다운로드 링크를 열지 못했습니다. 팝업 차단이 활성화되어 있는지 확인하세요.');
                        } else if (openCount < downloadUrls.length) {
                            alert(`일부 다운로드 링크만 열렸습니다. (${openCount}/${downloadUrls.length})\n나머지는 팝업이 차단되었을 수 있습니다.`);
                        }
                    }, 1000);
                }
            } catch (error) {
                console.error("다운로드 링크 열기 오류:", error);
                alert(`다운로드 링크를 여는 중 오류가 발생했습니다: ${error.message || "알 수 없는 오류"}`);
            }
        } else {
            // 브라우저 환경에서는 새 창으로 다운로드 페이지 표시
            alert(`브라우저 환경에서는 다운로드 페이지가 새 창으로 열립니다.`);
            
            // 다운로드 링크 추출
            const downloadLinks = downloadable.map(item => item.downloadInfo.url);
            
            // 새 탭/창 열기
            const win = window.open('', '_blank');
            if (win) {
                win.document.write(`
                    <html><head><title>모드 다운로드</title></head><body>
                    <h1>다운로드할 모드 (${downloadLinks.length}개)</h1>
                    <ul>
                        ${downloadable.map(item => `
                            <li><a href="${item.downloadInfo.url}" download>${item.mod.name} - ${item.downloadInfo.filename}</a></li>
                        `).join('')}
                    </ul>
                    <button id="download-all">모든 모드 다운로드</button>
                    <script>
                        document.getElementById('download-all').addEventListener('click', function() {
                            const links = ${JSON.stringify(downloadLinks)};
                            let i = 0;
                            function downloadNext() {
                                if (i < links.length) {
                                    const a = document.createElement('a');
                                    a.href = links[i];
                                    a.download = '';
                                    document.body.appendChild(a);
                                    a.click();
                                    document.body.removeChild(a);
                                    i++;
                                    setTimeout(downloadNext, 1000);
                                }
                            }
                            downloadNext();
                        });
                    </script>
                    </body></html>
                `);
            } else {
                alert('팝업이 차단되었습니다. 팝업 차단을 해제해주세요.');
            }
        }
        
        // 지원하지 않는 모드 알림
        if (notDownloadable.length > 0) {
            const notSupportedMods = notDownloadable.map(item => item.mod.name).join(', ');
            alert(`다음 모드는 선택한 버전(${selectedVersion})이나 로더(${selectedLoader})를 지원하지 않습니다:\n${notSupportedMods}`);
        }
        
    } catch (error) {
        loadingMessage.remove();
        console.error('모드 다운로드 정보 가져오기 실패:', error);
        alert(`모드 다운로드 정보를 가져오는 중 오류가 발생했습니다:\n${error.message || '알 수 없는 오류'}`);
    }
}

// 이벤트 리스너 바인딩 함수
function bindEventListeners() {
    searchInput.addEventListener('input', () => {
        renderMods('server', modData.server);
        renderMods('client', modData.client);
    });

    versionSelect.addEventListener('change', () => {
        renderMods('server', modData.server);
        renderMods('client', modData.client);
        updateSelectedModsView();
    });
    
    loaderSelect.addEventListener('change', () => {
        renderMods('server', modData.server);
        renderMods('client', modData.client);
        updateSelectedModsView();
    });

    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            switchTab(btn.dataset.tab);
        });
    });

    selectAllBtn.addEventListener('click', selectAll);
    deselectAllBtn.addEventListener('click', deselectAll);
    downloadSelectedBtn.addEventListener('click', downloadSelectedMods);
}

// 다운로드 관리자 스타일 추가
const styleElement = document.createElement('style');
styleElement.textContent = `
    .download-manager {
        background-color: #f9f9f9;
        border: 1px solid #ddd;
        border-radius: 8px;
        padding: 15px;
        margin-bottom: 20px;
        font-family: 'Noto Sans KR', sans-serif;
    }
    
    .download-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 15px;
    }
    
    .download-header h3 {
        margin: 0;
        color: #33691E;
        font-size: 16px;
    }
    
    .download-controls {
        display: flex;
        gap: 10px;
    }
    
    .download-controls button {
        padding: 5px 10px;
        background-color: #8BC34A;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 14px;
    }
    
    .download-controls button:disabled {
        background-color: #cccccc;
        cursor: not-allowed;
    }
    
    .download-controls button#cancel-download {
        background-color: #F44336;
    }
    
    .download-manager .progress-bar {
        height: 20px;
        background-color: #e0e0e0;
        border-radius: 10px;
        overflow: hidden;
        margin: 5px 0 15px 0;
    }
    
    .download-manager .progress-fill {
        height: 100%;
        background-color: #8BC34A;
        width: 0;
        transition: width 0.3s ease;
    }
    
    .download-manager .progress-label {
        margin-bottom: 5px;
        font-weight: bold;
        font-size: 14px;
    }
    
    .current-download {
        margin-bottom: 15px;
    }
    
    #current-file {
        margin-bottom: 5px;
        font-weight: bold;
        font-size: 14px;
    }
    
    .download-list {
        max-height: 300px;
        overflow-y: auto;
        border: 1px solid #e0e0e0;
        border-radius: 4px;
        padding: 10px;
    }
    
    .download-list h4 {
        margin-top: 0;
        margin-bottom: 10px;
        font-size: 15px;
    }
    
    #download-queue {
        list-style: none;
        padding: 0;
        margin: 0;
    }
    
    .queue-item {
        display: flex;
        justify-content: space-between;
        padding: 8px;
        border-bottom: 1px solid #f0f0f0;
        font-size: 13px;
    }
    
    .queue-item:last-child {
        border-bottom: none;
    }
    
    .queue-item.active {
        background-color: #E8F5E9;
    }
    
    .queue-item.success {
        background-color: #F1F8E9;
    }
    
    .queue-item.failed {
        background-color: #FFEBEE;
    }
    
    .queue-name {
        font-weight: bold;
        width: 30%;
    }
    
    .queue-file {
        color: #757575;
        width: 50%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    
    .queue-status {
        width: 20%;
        text-align: right;
    }
`;

// 초기화 및 스타일 적용
document.addEventListener('DOMContentLoaded', async () => {
    // 스타일 요소를 문서 시작 부분에 추가
    document.head.appendChild(styleElement);
    
    await initializeMods();
    bindEventListeners();
}); 