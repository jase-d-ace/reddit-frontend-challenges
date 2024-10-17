import directory from '../materials/directory.json'

const renderDirectoryRecursively = (fileType) => {
    if (fileType.children?.length) {
        return (
            <li>    
                <span> {fileType.name} - </span>{fileType.children.map(child => <span>{renderDirectoryRecursively(child)}</span>)}
            </li>
        )
    } else {
        return (
            <li>
                {fileType.name}
            </li>
        )
    }
}

export default function RecursiveNestedFolderDisplay() {

    return (
        <div>
            <h1>Challenge:</h1>
            <h3>Create a component that displays a recursive nested folder structure, displaying any files in the folder, and any subfolders. When a folder is clicked, display its contents</h3>
            <code>
                <ul>
                    {renderDirectoryRecursively(directory.root)}
                </ul>
            </code>
        </div>
    )
}