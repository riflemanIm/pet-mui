import dynamic from "next/dynamic";

const AdminApp = dynamic(() => import("@admin/index"), {
  ssr: false,
  loading: () => <div>Загрузка админки…</div>,
});

export default function AdminPage() {
  return <AdminApp />;
}
