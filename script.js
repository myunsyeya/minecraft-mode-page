// 모드 데이터
const modData = {
    server: [
        {
            name: "Traveler's Backpack",
            id: "travelersbackpack",
            url: "https://modrinth.com/mod/travelersbackpack",
            description: "다양한 특수 능력을 가진 배낭을 추가하는 모드입니다.",
            versions: []
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
        }
    ],
    client: [
        {
            name: "Traveler's Backpack",
            id: "travelersbackpack",
            url: "https://modrinth.com/mod/travelersbackpack",
            description: "다양한 특수 능력을 가진 배낭을 추가하는 모드입니다.",
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

// DOM 요소
const searchInput = document.getElementById('search-input');
const versionSelect = document.getElementById('version-select');
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
        data.forEach(version => {
            version.game_versions.forEach(gameVersion => {
                // 주요 버전만 필터링 (예: 1.20.1, 1.19.4 등)
                if (/^1\.\d+\.\d+$/.test(gameVersion)) {
                    gameVersions.add(gameVersion);
                }
            });
        });
        
        // 정렬된 버전 반환
        return Array.from(gameVersions).sort(compareVersions);
    } catch (error) {
        console.error(`${mod.name} 버전 정보 가져오기 실패:`, error);
        return [];
    }
}

// 특정 버전의 모드 다운로드 URL 가져오기
async function fetchModDownloadUrl(mod, gameVersion) {
    try {
        const response = await fetch(`https://api.modrinth.com/v2/project/${mod.id}/version`);
        if (!response.ok) {
            throw new Error(`API 요청 실패: ${response.statusText}`);
        }
        const versions = await response.json();
        
        // 선택된 게임 버전을 지원하는 모드 버전 중 가장 최신 버전 찾기
        const compatibleVersions = versions.filter(version => 
            version.game_versions.includes(gameVersion)
        );
        
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
                versionNumber: latestVersion.version_number
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
        const isVersionSupported = !selectedVersion || mod.versions.includes(selectedVersion);
        
        const modCard = createModCard(mod, type, isSelected, isVersionSupported);
        container.appendChild(modCard);
    });
}

// 모드 카드 생성 함수
function createModCard(mod, type, isSelected, isVersionSupported) {
    const modCard = document.createElement('div');
    modCard.className = 'mod-card';
    
    // 선택된 버전을 지원하지 않는 경우 클래스 추가
    if (!isVersionSupported) {
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
    
    // 지원하지 않는 버전이 선택된 경우 경고 메시지 추가
    if (!isVersionSupported && selectedVersion) {
        const warningMsg = document.createElement('div');
        warningMsg.className = 'version-warning';
        warningMsg.textContent = `⚠️ ${selectedVersion} 버전을 지원하지 않습니다`;
        modContent.appendChild(warningMsg);
    }
    
    const link = document.createElement('a');
    link.className = 'mod-link';
    link.href = mod.url;
    link.target = '_blank';
    link.textContent = '모드페이지';
    
    modFooter.appendChild(version);
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

    return mods.filter(mod => {
        const nameMatch = mod.name.toLowerCase().includes(searchTerm);
        const descriptionMatch = mod.description.toLowerCase().includes(searchTerm);
        
        // 버전 필터링은 제거하고 모든 모드를 보여줌 (대신 시각적으로 구분)
        return (nameMatch || descriptionMatch);
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

// 선택된 모드 다운로드 함수 (실제로는 링크 목록 생성)
async function downloadSelectedMods() {
    const selectedVersion = versionSelect.value;
    const allSelected = [...selectedMods.server, ...selectedMods.client];
    
    if (allSelected.length === 0) {
        alert('다운로드할 모드를 선택해주세요.');
        return;
    }
    
    if (!selectedVersion) {
        alert('특정 버전을 선택해주세요.');
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
                if (mod.versions.includes(selectedVersion)) {
                    return {
                        mod: mod,
                        downloadInfo: await fetchModDownloadUrl(mod, selectedVersion)
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
                if (mod.versions.includes(selectedVersion)) {
                    return {
                        mod: mod,
                        downloadInfo: await fetchModDownloadUrl(mod, selectedVersion)
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
        
        // 서버 모드와 클라이언트 모드 분리
        const serverModsDownloadable = downloadable.filter(item => 
            selectedMods.server.some(mod => mod.id === item.mod.id)
        );
        const clientModsDownloadable = downloadable.filter(item => 
            selectedMods.client.some(mod => mod.id === item.mod.id)
        );
        
        // 새 창에 링크 목록 표시
        const win = window.open('', '_blank');
        win.document.write(`
            <html>
            <head>
                <title>모드 다운로드 - ${selectedVersion}</title>
                <meta charset="UTF-8">
                <style>
                    body {
                        font-family: 'Noto Sans KR', sans-serif;
                        padding: 20px;
                        line-height: 1.6;
                        background-color: #f5f5f5;
                    }
                    h1, h2, h3 {
                        color: #33691E;
                    }
                    .container {
                        max-width: 1000px;
                        margin: 0 auto;
                        background-color: white;
                        padding: 20px;
                        border-radius: 8px;
                        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                    }
                    .mod-list {
                        display: grid;
                        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
                        gap: 15px;
                        margin-bottom: 30px;
                    }
                    .mod-card {
                        border: 1px solid #ddd;
                        border-radius: 5px;
                        padding: 15px;
                        position: relative;
                    }
                    .mod-header {
                        margin-bottom: 10px;
                        padding-bottom: 8px;
                        border-bottom: 1px solid #eee;
                    }
                    .mod-title {
                        font-weight: bold;
                        font-size: 18px;
                        color: #33691E;
                    }
                    .mod-version {
                        color: #757575;
                        font-size: 14px;
                        margin-top: 5px;
                    }
                    .download-button {
                        display: inline-block;
                        padding: 8px 16px;
                        background-color: #8BC34A;
                        color: white;
                        text-decoration: none;
                        border-radius: 4px;
                        font-weight: bold;
                        margin-top: 10px;
                    }
                    .category-section {
                        margin-bottom: 30px;
                        padding-bottom: 20px;
                        border-bottom: 1px solid #ddd;
                    }
                    .download-instructions {
                        background-color: #DCEDC8;
                        padding: 15px;
                        border-radius: 5px;
                        margin-bottom: 20px;
                        font-size: 16px;
                    }
                    .download-instructions ul {
                        margin-top: 10px;
                        padding-left: 20px;
                    }
                    .download-instructions li {
                        margin-bottom: 8px;
                    }
                    .download-links-table {
                        width: 100%;
                        border-collapse: collapse;
                        margin-bottom: 20px;
                    }
                    .download-links-table th {
                        background-color: #8BC34A;
                        color: white;
                        text-align: left;
                        padding: 10px;
                    }
                    .download-links-table td {
                        border: 1px solid #ddd;
                        padding: 10px;
                    }
                    .download-links-table tr:nth-child(even) {
                        background-color: #f9f9f9;
                    }
                    .error-card {
                        border-color: #f44336;
                        background-color: #ffebee;
                    }
                    .error-message {
                        color: #f44336;
                        font-weight: bold;
                    }
                    .mod-info {
                        color: #757575;
                        font-size: 14px;
                    }
                    .copy-btn {
                        padding: 5px 10px;
                        background-color: #9E9E9E;
                        color: white;
                        border: none;
                        border-radius: 3px;
                        cursor: pointer;
                        font-size: 12px;
                        margin-left: 5px;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <h1>모드 다운로드 - ${selectedVersion}</h1>
                    
                    <div class="download-instructions">
                        <h3>다운로드 방법</h3>
                        <p>브라우저에서는 보안 상의 이유로 여러 파일을 자동으로 다운로드하는 것을 제한합니다. 다음 방법 중 하나로 다운로드하세요:</p>
                        <ul>
                            <li>각 모드 카드의 <strong>다운로드</strong> 버튼을 개별적으로 클릭하여 다운로드</li>
                            <li>다운로드 링크를 복사하여 다운로드 매니저에 붙여넣기</li>
                        </ul>
                    </div>
                    
                    <!-- 서버 모드 섹션 -->
                    ${serverModsDownloadable.length > 0 ? `
                    <div class="category-section">
                        <h2>서버 모드 (${serverModsDownloadable.length}개)</h2>
                        <h3>다운로드 링크 목록</h3>
                        <table class="download-links-table">
                            <tr>
                                <th>모드 이름</th>
                                <th>버전</th>
                                <th>다운로드 링크</th>
                            </tr>
                            ${serverModsDownloadable.map(item => `
                            <tr>
                                <td>${item.mod.name}</td>
                                <td>${item.downloadInfo.versionNumber}</td>
                                <td>
                                    <a href="${item.downloadInfo.url}" download>${item.downloadInfo.filename}</a>
                                    <button class="copy-btn" onclick="navigator.clipboard.writeText('${item.downloadInfo.url}')">URL 복사</button>
                                </td>
                            </tr>
                            `).join('')}
                        </table>
                        
                        <div class="mod-list">
                            ${serverModsDownloadable.map(item => `
                            <div class="mod-card">
                                <div class="mod-header">
                                    <div class="mod-title">${item.mod.name}</div>
                                    <div class="mod-version">버전: ${item.downloadInfo.versionNumber}</div>
                                </div>
                                <div class="mod-info">
                                    ${item.mod.description}<br>
                                    파일명: ${item.downloadInfo.filename}
                                </div>
                                <a href="${item.downloadInfo.url}" class="download-button" download="${item.downloadInfo.filename}">다운로드</a>
                            </div>
                            `).join('')}
                        </div>
                    </div>
                    ` : ''}
                    
                    <!-- 클라이언트 모드 섹션 -->
                    ${clientModsDownloadable.length > 0 ? `
                    <div class="category-section">
                        <h2>클라이언트 모드 (${clientModsDownloadable.length}개)</h2>
                        <h3>다운로드 링크 목록</h3>
                        <table class="download-links-table">
                            <tr>
                                <th>모드 이름</th>
                                <th>버전</th>
                                <th>다운로드 링크</th>
                            </tr>
                            ${clientModsDownloadable.map(item => `
                            <tr>
                                <td>${item.mod.name}</td>
                                <td>${item.downloadInfo.versionNumber}</td>
                                <td>
                                    <a href="${item.downloadInfo.url}" download>${item.downloadInfo.filename}</a>
                                    <button class="copy-btn" onclick="navigator.clipboard.writeText('${item.downloadInfo.url}')">URL 복사</button>
                                </td>
                            </tr>
                            `).join('')}
                        </table>
                        
                        <div class="mod-list">
                            ${clientModsDownloadable.map(item => `
                            <div class="mod-card">
                                <div class="mod-header">
                                    <div class="mod-title">${item.mod.name}</div>
                                    <div class="mod-version">버전: ${item.downloadInfo.versionNumber}</div>
                                </div>
                                <div class="mod-info">
                                    ${item.mod.description}<br>
                                    파일명: ${item.downloadInfo.filename}
                                </div>
                                <a href="${item.downloadInfo.url}" class="download-button" download="${item.downloadInfo.filename}">다운로드</a>
                            </div>
                            `).join('')}
                        </div>
                    </div>
                    ` : ''}
                    
                    <!-- 지원되지 않는 모드 섹션 -->
                    ${notDownloadable.length > 0 ? `
                    <div class="category-section">
                        <h2>다운로드 불가능한 모드 (${notDownloadable.length}개)</h2>
                        <div class="mod-list">
                            ${notDownloadable.map(item => `
                            <div class="mod-card error-card">
                                <div class="mod-header">
                                    <div class="mod-title">${item.mod.name}</div>
                                </div>
                                <div class="error-message">⚠️ ${selectedVersion} 버전을 지원하지 않거나 다운로드 링크를 찾을 수 없습니다.</div>
                                <div class="mod-info">
                                    ${item.mod.description}<br>
                                    지원 버전: ${item.mod.versions.join(', ')}
                                </div>
                                <a href="${item.mod.url}" class="download-button" target="_blank" style="background-color: #9E9E9E;">모드 페이지 방문</a>
                            </div>
                            `).join('')}
                        </div>
                    </div>
                    ` : ''}
                </div>
            </body>
            </html>
        `);
        
        win.document.close();
        
    } catch (error) {
        loadingMessage.remove();
        console.error('모드 다운로드 정보 가져오기 실패:', error);
        alert('모드 다운로드 정보를 가져오는 중 오류가 발생했습니다.');
    }
}

// 이벤트 리스너
searchInput.addEventListener('input', () => {
    renderMods('server', modData.server);
    renderMods('client', modData.client);
});

versionSelect.addEventListener('change', () => {
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

// 초기화
document.addEventListener('DOMContentLoaded', initializeMods); 