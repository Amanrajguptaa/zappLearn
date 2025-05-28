import DocumentsSection from "../components/Disable/DocumentsSection";
import ImportDialog from "../components/Disable/ImportDialog";
// import NotesUploadSection from "../components/Disable/NotesUploadSection";
import DocSidebar from "../components/Disable/Sidebar";

export default function Notes() {
    return (
        <div className="w-full h-screen flex">
            <DocSidebar />
            <div className="w-full flex">
                <DocumentsSection />
                {/* <NotesUploadSection /> */}
                <ImportDialog />
            </div>
        </div>
    );
}