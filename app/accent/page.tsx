export default function AccentPage() {
    return (
        <div className="min-h-screen px-6 py-24 flex flex-col items-center justify-center gap-4 bg-white text-black dark:bg-black dark:text-white">
            <a
                href="https://www.accent.mk/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-semibold text-blue-600 underline underline-offset-4 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
            >
                https://www.accent.mk/
            </a>
            <div
                dangerouslySetInnerHTML={{
                    __html: '<a href="https://www.accent.mk/?utm_source=taskovikj.io&utm_medium=banner&utm_campaign=kampanja_1" class="btn">Open accent.mk</a>',
                }}
            />
        </div>
    )
}
