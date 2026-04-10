import { BRAND_GREEN, BRAND_DARK } from "../constants/data";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&family=DM+Serif+Display&display=swap');
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: 'DM Sans', sans-serif; }
  .acad-root { font-family: 'DM Sans', sans-serif; min-height: 100vh; background: #EEEDE9; }

  .auth-bg { min-height: 100vh; display: flex; align-items: center; justify-content: center; background: #EEEDE9; }
  .auth-card { background: #fff; border: 0.5px solid rgba(0,0,0,0.10); border-radius: 14px; padding: 2.75rem 2.25rem; width: 420px; }
  .auth-brand { display: flex; align-items: center; gap: 10px; margin-bottom: 2rem; }
  .auth-logo { width: 36px; height: 36px; background: ${BRAND_GREEN}; border-radius: 9px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
  .auth-logo svg { width: 20px; height: 20px; }
  .auth-brand-name { font-family: 'DM Serif Display', serif; font-size: 18px; color: #1A1A18; }
  .auth-heading { font-family: 'DM Serif Display', serif; font-size: 28px; font-weight: 400; color: #1A1A18; margin-bottom: 0.3rem; }
  .auth-sub { font-size: 13px; color: #6B6B67; margin-bottom: 1.75rem; }
  .field-group { margin-bottom: 1rem; }
  .field-label { display: block; font-size: 11px; font-weight: 500; color: #6B6B67; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 5px; }
  .field-input { width: 100%; padding: 9px 12px; font-size: 14px; font-family: 'DM Sans', sans-serif; border: 0.5px solid rgba(0,0,0,0.18); border-radius: 8px; background: #fff; color: #1A1A18; outline: none; transition: border-color 0.15s, box-shadow 0.15s; }
  .field-input:focus { border-color: ${BRAND_GREEN}; box-shadow: 0 0 0 3px rgba(29,158,117,0.10); }
  .field-row { display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.25rem; }
  .remember-wrap { display: flex; align-items: center; gap: 6px; font-size: 13px; color: #6B6B67; cursor: pointer; }
  .btn-primary { width: 100%; padding: 11px; background: ${BRAND_GREEN}; color: #fff; border: none; border-radius: 8px; font-size: 14px; font-family: 'DM Sans', sans-serif; font-weight: 500; cursor: pointer; transition: background 0.15s; }
  .btn-primary:hover { background: ${BRAND_DARK}; }
  .auth-footer { font-size: 12px; color: #9E9E9A; margin-top: 1.5rem; text-align: center; }
  .auth-link { color: ${BRAND_GREEN}; cursor: pointer; text-decoration: none; font-weight: 500; }
  .auth-link:hover { text-decoration: underline; }
  .msg-error { background: #fdeaea; color: #c0392b; border-radius: 8px; padding: 8px 12px; font-size: 13px; margin-bottom: 1rem; }
  .msg-success { background: #e6f7f1; color: #0F6E56; border-radius: 8px; padding: 8px 12px; font-size: 13px; margin-bottom: 1rem; }
  .forgot-link { font-size: 13px; color: ${BRAND_GREEN}; text-decoration: none; font-weight: 500; cursor: pointer; }
  .forgot-link:hover { text-decoration: underline; }

  .dash-wrap { display: flex; min-height: 100vh; }
  .sidebar { width: 240px; background: #fff; border-right: 0.5px solid rgba(0,0,0,0.08); padding: 28px; display: flex; flex-direction: column; flex-shrink: 0; }
  .sidebar-brand { display: flex; align-items: center; gap: 10px; margin-bottom: 36px; }
  .sidebar-brand-name { font-family: 'DM Serif Display', serif; font-size: 19px; color: #1A1A18; }
  .sidebar-logo { width: 34px; height: 34px; background: ${BRAND_GREEN}; border-radius: 8px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
  .sidebar-logo svg { width: 20px; height: 20px; }
  .menu { list-style: none; flex: 1; display: flex; flex-direction: column; gap: 2px; }
  .menu-item { display: flex; align-items: center; gap: 10px; padding: 10px 12px; border-radius: 8px; cursor: pointer; color: #6B6B67; font-size: 14px; transition: background 0.15s, color 0.15s; }
  .menu-item:hover { background: #F5F5F3; color: ${BRAND_GREEN}; }
  .menu-item.active { background: #E8F5F1; color: ${BRAND_GREEN}; font-weight: 500; }
  .menu-icon { width: 16px; height: 16px; flex-shrink: 0; }
  .logout-btn { display: flex; align-items: center; gap: 10px; padding: 10px 12px; border-radius: 8px; cursor: pointer; color: #E24B4A; font-size: 14px; margin-top: auto; background: none; border: none; font-family: 'DM Sans', sans-serif; transition: background 0.15s; }
  .logout-btn:hover { background: #F5F5F3; }

  .main { flex: 1; padding: 32px; overflow-x: auto; }
  .topbar { display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px; }
  .topbar-title { font-family: 'DM Serif Display', serif; font-size: 22px; color: #1A1A18; }
  .topbar-right { display: flex; align-items: center; gap: 10px; }
  .search-input { padding: 9px 12px; width: 240px; border-radius: 8px; border: 0.5px solid rgba(0,0,0,0.15); font-family: 'DM Sans', sans-serif; font-size: 13px; outline: none; background: #fff; color: #1A1A18; }
  .search-input:focus { border-color: ${BRAND_GREEN}; box-shadow: 0 0 0 3px rgba(29,158,117,0.10); }
  .add-btn { background: ${BRAND_GREEN}; border: none; color: #fff; padding: 9px 16px; border-radius: 8px; cursor: pointer; font-size: 14px; font-family: 'DM Sans', sans-serif; font-weight: 500; transition: background 0.15s; }
  .add-btn:hover { background: ${BRAND_DARK}; }

  .cards-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-bottom: 28px; }
  .stat-card { background: #fff; padding: 18px 20px; border-radius: 12px; border: 0.5px solid rgba(0,0,0,0.08); }
  .stat-label { font-size: 12px; color: #6B6B67; margin-bottom: 6px; text-transform: uppercase; letter-spacing: 0.04em; }
  .stat-value { font-size: 28px; font-family: 'DM Serif Display', serif; color: #1A1A18; }

  .table-card { background: #fff; border-radius: 12px; border: 0.5px solid rgba(0,0,0,0.08); overflow: hidden; }
  table { width: 100%; border-collapse: collapse; }
  th { background: #F5F5F3; text-align: left; padding: 12px 14px; font-size: 12px; color: #6B6B67; text-transform: uppercase; letter-spacing: 0.04em; font-weight: 500; }
  td { padding: 13px 14px; border-top: 0.5px solid rgba(0,0,0,0.06); font-size: 13px; color: #1A1A18; }
  tr:hover td { background: #FAFAF8; }
  .status-badge { padding: 3px 10px; border-radius: 20px; font-size: 11px; font-weight: 500; display: inline-block; }
  .status-Active   { background: #e6f7f1; color: #0F6E56; }
  .status-Inactive { background: #fdeaea; color: #c0392b; }
  .status-Pending  { background: #fff5e6; color: #c87f0a; }
  .btn-edit { background: #e8f0fa; border: none; padding: 5px 10px; border-radius: 6px; cursor: pointer; font-size: 12px; color: #1A5EA8; margin-right: 6px; font-family: 'DM Sans', sans-serif; }
  .btn-edit:hover { background: #d0e4f7; }
  .btn-delete { background: #fdeaea; border: none; padding: 5px 10px; border-radius: 6px; cursor: pointer; font-size: 12px; color: #c0392b; font-family: 'DM Sans', sans-serif; }
  .btn-delete:hover { background: #fbd5d5; }
  .empty-state { text-align: center; padding: 48px; color: #9E9E9A; font-size: 14px; }

  .modal-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.40); display: flex; align-items: center; justify-content: center; z-index: 100; }
  .modal-box { background: #fff; width: 360px; border-radius: 14px; padding: 24px; display: flex; flex-direction: column; gap: 12px; }
  .modal-title { font-family: 'DM Serif Display', serif; font-size: 20px; color: #1A1A18; margin-bottom: 4px; }
  .modal-input { width: 100%; padding: 9px 12px; border: 0.5px solid rgba(0,0,0,0.18); border-radius: 8px; font-family: 'DM Sans', sans-serif; font-size: 13px; color: #1A1A18; outline: none; background: #fff; }
  .modal-input:focus { border-color: ${BRAND_GREEN}; box-shadow: 0 0 0 3px rgba(29,158,117,0.10); }
  .modal-select { width: 100%; padding: 9px 12px; border: 0.5px solid rgba(0,0,0,0.18); border-radius: 8px; font-family: 'DM Sans', sans-serif; font-size: 13px; color: #1A1A18; outline: none; background: #fff; appearance: none; }
  .modal-select:focus { border-color: ${BRAND_GREEN}; }
  .modal-btns { display: flex; gap: 10px; margin-top: 4px; }
  .modal-save { flex: 1; padding: 10px; border: none; border-radius: 8px; background: ${BRAND_GREEN}; color: #fff; font-size: 14px; font-family: 'DM Sans', sans-serif; font-weight: 500; cursor: pointer; transition: background 0.15s; }
  .modal-save:hover { background: ${BRAND_DARK}; }
  .modal-cancel { flex: 1; padding: 10px; border: 0.5px solid rgba(0,0,0,0.18); border-radius: 8px; background: #fff; color: #6B6B67; font-size: 14px; font-family: 'DM Sans', sans-serif; cursor: pointer; }
  .modal-cancel:hover { background: #F5F5F3; }
`;

export default styles;
