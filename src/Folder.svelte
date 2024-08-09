<script>
    import {
        faEdit,
        faTrash,
        faChevronDown,
        faChevronRight,
        faFolder,
    } from "@fortawesome/free-solid-svg-icons";
    import { FontAwesomeIcon } from "@fortawesome/svelte-fontawesome";

    export let name = "";
    export let bookmarks = [];

    let isOpen = false;

    function toggleOpen() {
        isOpen = !isOpen;
    }

    function editBookmark(bookmark) {
        alert(`Edit: ${bookmark}`);
    }

    function deleteBookmark(bookmark) {
        alert(`Delete: ${bookmark}`);
    }
</script>

<div class="ml-4">
    <div class="cursor-pointer flex items-center py-2" on:click={toggleOpen}>
        <FontAwesomeIcon
            icon={isOpen ? faChevronDown : faChevronRight}
            class="mr-2"
        />
        <FontAwesomeIcon icon={faFolder} class="mr-2 text-yellow-500" />
        <span class="flex-1">{name}</span>
        <button
            class="text-gray-500 hover:text-gray-700 p-1"
            on:click={editBookmark}
        >
            <FontAwesomeIcon icon={faEdit} class="w-4 h-4" />
        </button>
        <button
            class="text-red-500 hover:text-red-700 p-1"
            on:click={deleteBookmark}
        >
            <FontAwesomeIcon icon={faTrash} class="w-4 h-4" />
        </button>
    </div>
    {#if isOpen}
        <ul class="ml-6 mt-2 border-l-2 border-gray-200 pl-4">
            {#each bookmarks as bookmark}
                <li class="flex items-center justify-between py-2">
                    <span class="text-blue-500 cursor-pointer hover:underline"
                        >{bookmark}</span
                    >
                    <button
                        class="text-gray-500 hover:text-gray-700 p-1"
                        on:click={() => editBookmark(bookmark)}
                    >
                        <FontAwesomeIcon icon={faEdit} class="w-4 h-4" />
                    </button>
                    <button
                        class="text-red-500 hover:text-red-700 p-1"
                        on:click={() => deleteBookmark(bookmark)}
                    >
                        <FontAwesomeIcon icon={faTrash} class="w-4 h-4" />
                    </button>
                </li>
            {/each}
        </ul>
    {/if}
</div>
