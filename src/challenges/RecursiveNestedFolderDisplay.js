import directory from '../materials/directory.json'

const renderDirectoryRecursively = (fileType) => {
    if (fileType.type == "file") {
        return <span>{fileType.name}</span>
    } else if (fileType.children.length) {
        return renderDirectoryRecursively(fileType.children)
    }
    return (
        <span>{fileType.name}</span>
    )
}

export default function RecursiveNestedFolderDisplay() {
    return (
        <div>
            <header>
                <h1>Challenge:</h1>
                <h3>Create a component that displays a recursive nested folder structure, displaying any files in the folder, and any subfolders. When a folder is clicked, display its contents</h3>
            </header>
            <code>
                {JSON.stringify(directory)}
            </code>
        </div>
    )
}