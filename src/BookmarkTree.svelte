<script>
    import Folder from "./Folder.svelte";
    import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
    import { FontAwesomeIcon } from "@fortawesome/svelte-fontawesome";

    export let data = {};

    function editBookmark(bookmark) {
        alert(`Edit: ${bookmark}`);
    }

    function deleteBookmark(bookmark) {
        alert(`Delete: ${bookmark}`);
    }
</script>

<ul class="list-none p-0">
    {#each data.rootBookmarks as bookmark}
        <li
            class="flex items-center justify-between py-2 border-b border-gray-200"
        >
            <span
                class="text-blue-500 cursor-pointer hover:underline flex-1 flex items-center"
                >{bookmark}</span
            >
            <button
                class="text-gray-500 hover:text-gray-700 p-1"
                on:click={() => editBookmark(bookmark)}
            >
                <i class="fa-solid fa-trash"></i>
            </button>
            <button
                class="text-red-500 hover:text-red-700 p-1"
                on:click={() => deleteBookmark(bookmark)}
            >
                <FontAwesomeIcon icon={faTrash} class="w-4 h-4" />
            </button>
        </li>
    {/each}

    {#each data.folders as folder (folder.name)}
        <li class="border-b border-gray-200">
            <Folder name={folder.name} bookmarks={folder.bookmarks} />
        </li>
    {/each}
</ul>
