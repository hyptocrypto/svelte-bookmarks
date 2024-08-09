<script>
    import BookmarkTree from "./BookmarkTree.svelte";

    let data = {
        rootBookmarks: ["Google", "YouTube", "Wikipedia"],
        folders: [
            {
                name: "Programming",
                bookmarks: [
                    "Svelte Documentation",
                    "Tailwind CSS",
                    "MDN Web Docs",
                ],
            },
            {
                name: "Design",
                bookmarks: ["Dribbble", "Behance", "Figma"],
            },
            {
                name: "Tools",
                bookmarks: ["GitHub", "CodePen", "Stack Overflow"],
            },
        ],
    };
</script>

<main class="p-6 max-w-4xl mx-auto">
    <head>
        <!-- Font Awesome CDN -->
        <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />
    </head>
    <h1 class="text-2xl font-bold mb-4">My Bookmarks</h1>
    <div class="bg-white shadow overflow-hidden rounded-lg">
        <BookmarkTree {data} />
    </div>
</main>
