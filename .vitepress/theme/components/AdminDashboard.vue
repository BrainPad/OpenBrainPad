<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'

// ── パスワード設定 ────────────────────────────────────────────────
// 変更方法: 以下のコマンドで新しいパスワードのSHA-256ハッシュを取得してください
//   node -e "const c=require('crypto');console.log(c.createHash('sha256').update('新パスワード').digest('hex'))"
// デフォルトパスワード: openbrainpad-admin
const PASS_HASH = '7a96e6fbf47fcf2e6e60ecde1d7e71e5a34038c71e8ea0afc7b2ce75d9c6afba'
const GA4_ID = 'G-XXXXXXXXXX' // ← GA4 測定IDに差し替えてください
// ──────────────────────────────────────────────────────────────────

const password = ref('')
const authed = ref(false)
const error = ref(false)
const loading = ref(false)

// ページビュー簡易カウンター（localStorage）
const localViews = ref(0)
const localSessions = ref(0)
const topPages = ref<{ path: string; count: number }[]>([])

async function sha256(str: string): Promise<string> {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(str))
  return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, '0')).join('')
}

async function login() {
  if (!password.value) return
  loading.value = true
  error.value = false
  const hash = await sha256(password.value)
  if (hash === PASS_HASH) {
    authed.value = true
    sessionStorage.setItem('obp-admin-auth', '1')
    loadLocalStats()
  } else {
    error.value = true
  }
  loading.value = false
}

function logout() {
  authed.value = false
  sessionStorage.removeItem('obp-admin-auth')
  password.value = ''
}

function loadLocalStats() {
  try {
    const raw = localStorage.getItem('obp-analytics')
    if (!raw) return
    const data = JSON.parse(raw)
    localViews.value = data.totalViews ?? 0
    localSessions.value = data.totalSessions ?? 0
    const pages: Record<string, number> = data.pages ?? {}
    topPages.value = Object.entries(pages)
      .map(([path, count]) => ({ path, count: count as number }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 10)
  } catch { /* ignore */ }
}

const ga4DashboardUrl = computed(() =>
  `https://analytics.google.com/analytics/web/#/p${GA4_ID.replace('G-', '')}/reports/intelligenthome`
)

const ga4RealtimeUrl = computed(() =>
  `https://analytics.google.com/analytics/web/#/p${GA4_ID.replace('G-', '')}/reports/realtime`
)

onMounted(() => {
  if (sessionStorage.getItem('obp-admin-auth') === '1') {
    authed.value = true
    loadLocalStats()
  }

  // ページビューをローカルに記録
  if (typeof window !== 'undefined') {
    try {
      const raw = localStorage.getItem('obp-analytics')
      const data = raw ? JSON.parse(raw) : { totalViews: 0, totalSessions: 0, pages: {} }
      data.totalViews = (data.totalViews ?? 0) + 1
      const path = window.location.pathname
      data.pages = data.pages ?? {}
      data.pages[path] = (data.pages[path] ?? 0) + 1
      // セッション判定（sessionStorageに未記録なら新規セッション）
      if (!sessionStorage.getItem('obp-session-counted')) {
        data.totalSessions = (data.totalSessions ?? 0) + 1
        sessionStorage.setItem('obp-session-counted', '1')
      }
      localStorage.setItem('obp-analytics', JSON.stringify(data))
    } catch { /* ignore */ }
  }
})
</script>

<template>
  <!-- ログインフォーム -->
  <div v-if="!authed" class="adm-login">
    <div class="adm-login-box">
      <div class="adm-login-icon">🔐</div>
      <h2>管理者ログイン</h2>
      <p>このページは管理者専用です。</p>
      <form @submit.prevent="login" class="adm-form">
        <input
          v-model="password"
          type="password"
          placeholder="パスワードを入力"
          class="adm-input"
          :class="{ 'adm-input-error': error }"
          autocomplete="current-password"
        />
        <p v-if="error" class="adm-error">パスワードが違います</p>
        <button type="submit" class="adm-btn" :disabled="loading">
          {{ loading ? '確認中...' : 'ログイン' }}
        </button>
      </form>
    </div>
  </div>

  <!-- ダッシュボード -->
  <div v-else class="adm-dashboard">
    <div class="adm-header">
      <div>
        <h1>📊 管理ダッシュボード</h1>
        <p class="adm-subtitle">OpenBrainPad サイト分析</p>
      </div>
      <button class="adm-logout" @click="logout">ログアウト</button>
    </div>

    <!-- GA4 設定ステータス -->
    <div class="adm-section">
      <h2 class="adm-section-title">🔗 Google Analytics 4</h2>
      <div v-if="GA4_ID === 'G-XXXXXXXXXX'" class="adm-alert adm-alert-warn">
        <strong>⚠️ GA4 未設定</strong><br>
        <code>.vitepress/config.ts</code> の <code>G-XXXXXXXXXX</code> を実際の測定IDに差し替えてください。<br>
        <a href="https://analytics.google.com" target="_blank" rel="noopener">→ Google Analytics でプロパティを作成</a>
      </div>
      <div v-else class="adm-ga-links">
        <a :href="ga4DashboardUrl" target="_blank" rel="noopener" class="adm-ga-btn">
          📈 GA4 ダッシュボードを開く
        </a>
        <a :href="ga4RealtimeUrl" target="_blank" rel="noopener" class="adm-ga-btn outline">
          ⚡ リアルタイムレポート
        </a>
        <a href="https://analytics.google.com" target="_blank" rel="noopener" class="adm-ga-btn outline">
          🔍 全レポートを見る
        </a>
      </div>

      <!-- GA4 で確認できる主要指標 -->
      <div class="adm-metrics-guide">
        <h3>GA4 で確認できる主な指標</h3>
        <div class="adm-metrics-grid">
          <div class="adm-metric-item">
            <span class="adm-metric-icon">👤</span>
            <span class="adm-metric-label">ユーザー数</span>
            <span class="adm-metric-desc">サイト訪問者の実数</span>
          </div>
          <div class="adm-metric-item">
            <span class="adm-metric-icon">📄</span>
            <span class="adm-metric-label">ページビュー</span>
            <span class="adm-metric-desc">各ページの閲覧数</span>
          </div>
          <div class="adm-metric-item">
            <span class="adm-metric-icon">⏱️</span>
            <span class="adm-metric-label">平均滞在時間</span>
            <span class="adm-metric-desc">コンテンツの読了度</span>
          </div>
          <div class="adm-metric-item">
            <span class="adm-metric-icon">🌍</span>
            <span class="adm-metric-label">流入元</span>
            <span class="adm-metric-desc">Twitter / 検索 / 直接</span>
          </div>
          <div class="adm-metric-item">
            <span class="adm-metric-icon">📱</span>
            <span class="adm-metric-label">デバイス比率</span>
            <span class="adm-metric-desc">PC / スマホ / タブレット</span>
          </div>
          <div class="adm-metric-item">
            <span class="adm-metric-icon">🔗</span>
            <span class="adm-metric-label">人気コンテンツ</span>
            <span class="adm-metric-desc">最もクリックされたリンク</span>
          </div>
        </div>
      </div>
    </div>

    <!-- ローカル簡易統計（このブラウザ計測） -->
    <div class="adm-section">
      <h2 class="adm-section-title">💾 ローカル簡易カウンター <span class="adm-badge">このブラウザのみ</span></h2>
      <p class="adm-note">※ このブラウザでの累計値です。GA4 設定後はそちらが正確な全体値になります。</p>
      <div class="adm-stats-row">
        <div class="adm-stat-card">
          <span class="adm-stat-num">{{ localViews.toLocaleString() }}</span>
          <span class="adm-stat-label">累計ページビュー</span>
        </div>
        <div class="adm-stat-card">
          <span class="adm-stat-num">{{ localSessions.toLocaleString() }}</span>
          <span class="adm-stat-label">累計セッション数</span>
        </div>
      </div>

      <div v-if="topPages.length > 0" class="adm-top-pages">
        <h3>アクセス内訳</h3>
        <div v-for="p in topPages" :key="p.path" class="adm-page-row">
          <span class="adm-page-path">{{ p.path || '/' }}</span>
          <span class="adm-page-bar-wrap">
            <span
              class="adm-page-bar"
              :style="{ width: `${Math.min(100, (p.count / (topPages[0]?.count || 1)) * 100)}%` }"
            />
          </span>
          <span class="adm-page-count">{{ p.count }}</span>
        </div>
      </div>
    </div>

    <!-- セットアップ手順 -->
    <div class="adm-section">
      <h2 class="adm-section-title">⚙️ GA4 セットアップ手順</h2>
      <ol class="adm-steps">
        <li><a href="https://analytics.google.com" target="_blank" rel="noopener">Google Analytics</a> にアクセスし、新しい GA4 プロパティを作成</li>
        <li>「データストリーム」→「ウェブ」を選択してサイトURLを登録</li>
        <li>発行された <strong>測定ID（G-XXXXXXXXXX 形式）</strong> をコピー</li>
        <li><code>.vitepress/config.ts</code> の <code>G-XXXXXXXXXX</code> を 2か所 その測定IDに置き換える</li>
        <li>デプロイ後、Google Analytics のリアルタイムレポートで計測を確認</li>
      </ol>
    </div>
  </div>
</template>

<style scoped>
/* ===== Login ===== */
.adm-login {
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.adm-login-box {
  background: var(--color-surface, #fff);
  border: 1.5px solid var(--color-border, #dbeafe);
  border-radius: 18px;
  padding: 48px 40px;
  width: 100%;
  max-width: 380px;
  text-align: center;
  box-shadow: 0 8px 32px rgba(37,99,235,0.1);
}

.adm-login-icon { font-size: 3rem; margin-bottom: 16px; }

.adm-login-box h2 {
  font-size: 1.4rem;
  font-weight: 800;
  color: var(--color-text, #0f172a);
  margin: 0 0 8px;
}

.adm-login-box p {
  font-size: 0.88rem;
  color: var(--color-text-muted, #64748b);
  margin: 0 0 24px;
}

.adm-form { display: flex; flex-direction: column; gap: 10px; }

.adm-input {
  width: 100%;
  padding: 12px 16px;
  border: 1.5px solid var(--color-border, #dbeafe);
  border-radius: 10px;
  font-size: 0.95rem;
  background: var(--color-bg, #f0f6ff);
  color: var(--color-text, #0f172a);
  outline: none;
  transition: border-color 0.2s;
}

.adm-input:focus { border-color: #2563eb; }
.adm-input-error { border-color: #ef4444 !important; }

.adm-error {
  font-size: 0.82rem;
  color: #ef4444;
  margin: 0;
}

.adm-btn {
  padding: 12px;
  background: linear-gradient(135deg, #2563eb, #1d4ed8);
  color: #fff;
  font-weight: 700;
  font-size: 0.95rem;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: opacity 0.2s;
}

.adm-btn:disabled { opacity: 0.6; cursor: not-allowed; }

/* ===== Dashboard ===== */
.adm-dashboard {
  max-width: 860px;
  margin: 0 auto;
  padding: 48px 2rem 80px;
}

.adm-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 40px;
  gap: 16px;
  flex-wrap: wrap;
}

.adm-header h1 {
  font-size: 1.8rem;
  font-weight: 900;
  color: var(--color-text, #0f172a);
  margin: 0 0 4px;
}

.adm-subtitle {
  font-size: 0.9rem;
  color: var(--color-text-muted, #64748b);
  margin: 0;
}

.adm-logout {
  padding: 8px 18px;
  background: transparent;
  border: 1.5px solid var(--color-border, #dbeafe);
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--color-text-muted, #64748b);
  cursor: pointer;
  transition: all 0.2s;
  flex-shrink: 0;
}

.adm-logout:hover { border-color: #ef4444; color: #ef4444; }

.adm-section {
  background: var(--color-surface, #fff);
  border: 1.5px solid var(--color-border, #dbeafe);
  border-radius: 16px;
  padding: 28px 32px;
  margin-bottom: 20px;
}

.adm-section-title {
  font-size: 1.1rem;
  font-weight: 800;
  color: var(--color-text, #0f172a);
  margin: 0 0 20px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.adm-badge {
  font-size: 0.7rem;
  font-weight: 700;
  background: #fef3c7;
  color: #92400e;
  border: 1px solid #fde68a;
  border-radius: 999px;
  padding: 2px 8px;
}

.adm-alert {
  border-radius: 10px;
  padding: 16px 20px;
  font-size: 0.88rem;
  line-height: 1.6;
}

.adm-alert-warn {
  background: #fef9c3;
  border: 1px solid #fde047;
  color: #713f12;
}

.adm-alert a {
  color: #1d4ed8;
  font-weight: 600;
}

.adm-ga-links {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 24px;
}

.adm-ga-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 10px 18px;
  background: linear-gradient(135deg, #2563eb, #1d4ed8);
  color: #fff !important;
  font-weight: 700;
  font-size: 0.88rem;
  border-radius: 8px;
  text-decoration: none !important;
  border: none !important;
  transition: opacity 0.2s;
  box-shadow: 0 3px 10px rgba(37,99,235,0.3);
}

.adm-ga-btn:hover { opacity: 0.88; }

.adm-ga-btn.outline {
  background: transparent !important;
  color: #2563eb !important;
  border: 1.5px solid #93c5fd !important;
  box-shadow: none;
}

.adm-metrics-guide h3 {
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--color-text-muted, #64748b);
  margin: 0 0 12px;
}

.adm-metrics-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 10px;
}

.adm-metric-item {
  background: var(--color-surface-2, #f8faff);
  border: 1px solid var(--color-border, #dbeafe);
  border-radius: 10px;
  padding: 12px 14px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.adm-metric-icon { font-size: 1.3rem; }
.adm-metric-label { font-size: 0.85rem; font-weight: 700; color: var(--color-text, #0f172a); }
.adm-metric-desc { font-size: 0.76rem; color: var(--color-text-muted, #64748b); }

.adm-stats-row {
  display: flex;
  gap: 12px;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.adm-stat-card {
  background: linear-gradient(135deg, #eff6ff, #dbeafe);
  border: 1.5px solid #bfdbfe;
  border-radius: 12px;
  padding: 18px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  min-width: 140px;
}

.adm-stat-num {
  font-size: 2rem;
  font-weight: 900;
  color: #1d4ed8;
  line-height: 1;
}

.adm-stat-label {
  font-size: 0.78rem;
  font-weight: 600;
  color: #3b82f6;
}

.adm-note {
  font-size: 0.8rem;
  color: var(--color-text-muted, #64748b);
  margin: -8px 0 16px;
  font-style: italic;
}

.adm-top-pages h3 {
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--color-text-muted, #64748b);
  margin: 0 0 10px;
}

.adm-page-row {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 6px 0;
  border-bottom: 1px solid var(--color-border, #f1f5f9);
  font-size: 0.84rem;
}

.adm-page-path {
  width: 120px;
  flex-shrink: 0;
  color: var(--color-text, #0f172a);
  font-family: monospace;
  font-size: 0.8rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.adm-page-bar-wrap {
  flex: 1;
  background: #f1f5f9;
  border-radius: 999px;
  height: 8px;
  overflow: hidden;
}

.adm-page-bar {
  display: block;
  height: 100%;
  background: linear-gradient(90deg, #2563eb, #06b6d4);
  border-radius: 999px;
  transition: width 0.4s ease;
}

.adm-page-count {
  width: 32px;
  text-align: right;
  font-weight: 700;
  color: #2563eb;
  flex-shrink: 0;
}

.adm-steps {
  padding-left: 20px;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.adm-steps li {
  font-size: 0.9rem;
  line-height: 1.6;
  color: var(--color-text, #0f172a);
}

.adm-steps code {
  background: var(--color-surface-2, #f8faff);
  border: 1px solid var(--color-border, #dbeafe);
  border-radius: 4px;
  padding: 1px 6px;
  font-size: 0.85rem;
  color: #1d4ed8;
}

.adm-steps a {
  color: #2563eb;
  font-weight: 600;
}
</style>
