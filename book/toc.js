// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded affix "><a href="title-page.html">Helix</a></li><li class="chapter-item expanded "><a href="installation/install.html"><strong aria-hidden="true">1.</strong> Installation</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="installation/prebuilt-binaries.html"><strong aria-hidden="true">1.1.</strong> Pre-built Binaries</a></li><li class="chapter-item expanded "><a href="installation/package-managers.html"><strong aria-hidden="true">1.2.</strong> Package Managers</a></li><li class="chapter-item expanded "><a href="installation/building-from-source.html"><strong aria-hidden="true">1.3.</strong> Building From Source</a></li></ol></li><li class="chapter-item expanded "><a href="usage/usage.html"><strong aria-hidden="true">2.</strong> Usage</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="usage/modal-editing-basics.html"><strong aria-hidden="true">2.1.</strong> Modal Editing Basics</a></li><li class="chapter-item expanded "><a href="usage/movements.html"><strong aria-hidden="true">2.2.</strong> Movements</a></li><li class="chapter-item expanded "><a href="usage/selections.html"><strong aria-hidden="true">2.3.</strong> Selections</a></li><li class="chapter-item expanded "><a href="usage/multiple-cursors.html"><strong aria-hidden="true">2.4.</strong> Multiple cursors</a></li><li class="chapter-item expanded "><a href="usage/search.html"><strong aria-hidden="true">2.5.</strong> Search</a></li><li class="chapter-item expanded "><a href="usage/jumplist.html"><strong aria-hidden="true">2.6.</strong> Jumplist</a></li><li class="chapter-item expanded "><a href="usage/registers.html"><strong aria-hidden="true">2.7.</strong> Registers</a></li><li class="chapter-item expanded "><a href="usage/macros.html"><strong aria-hidden="true">2.8.</strong> Macros</a></li><li class="chapter-item expanded "><a href="usage/textobjects.html"><strong aria-hidden="true">2.9.</strong> Text Objects</a></li><li class="chapter-item expanded "><a href="usage/surround.html"><strong aria-hidden="true">2.10.</strong> Surround</a></li><li class="chapter-item expanded "><a href="usage/comments.html"><strong aria-hidden="true">2.11.</strong> Commenting</a></li><li class="chapter-item expanded "><a href="usage/buffers.html"><strong aria-hidden="true">2.12.</strong> Buffers</a></li><li class="chapter-item expanded "><a href="usage/splits.html"><strong aria-hidden="true">2.13.</strong> Splits</a></li><li class="chapter-item expanded "><a href="usage/pickers.html"><strong aria-hidden="true">2.14.</strong> Pickers</a></li><li class="chapter-item expanded "><a href="usage/command-line.html"><strong aria-hidden="true">2.15.</strong> Command line</a></li><li class="chapter-item expanded "><a href="usage/language-servers.html"><strong aria-hidden="true">2.16.</strong> Language Servers</a></li></ol></li><li class="chapter-item expanded "><a href="reference/reference.html"><strong aria-hidden="true">3.</strong> Reference</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="reference/keymap.html"><strong aria-hidden="true">3.1.</strong> Default Keymaps &amp; Modes</a></li><li class="chapter-item expanded "><a href="reference/commands.html"><strong aria-hidden="true">3.2.</strong> Available Commands</a></li><li class="chapter-item expanded "><a href="reference/lang-support.html"><strong aria-hidden="true">3.3.</strong> Default Language Support</a></li><li class="chapter-item expanded "><a href="reference/language-server-configs.html"><strong aria-hidden="true">3.4.</strong> Default Supported Language Servers</a></li><li class="chapter-item expanded "><a href="reference/terminal-support.html"><strong aria-hidden="true">3.5.</strong> Terminal Support</a></li></ol></li><li class="chapter-item expanded "><a href="configuration/configuration.html"><strong aria-hidden="true">4.</strong> Configuration</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="configuration/editor.html"><strong aria-hidden="true">4.1.</strong> Editor</a></li><li class="chapter-item expanded "><a href="configuration/themes.html"><strong aria-hidden="true">4.2.</strong> Themes</a></li><li class="chapter-item expanded "><a href="configuration/remapping.html"><strong aria-hidden="true">4.3.</strong> Key Remapping</a></li><li class="chapter-item expanded "><a href="configuration/languages.html"><strong aria-hidden="true">4.4.</strong> Languages</a></li><li class="chapter-item expanded "><a href="reference/debug-configs.html"><strong aria-hidden="true">4.5.</strong> Debugger</a></li></ol></li><li class="chapter-item expanded "><a href="ecosystem/ecosystem.html"><strong aria-hidden="true">5.</strong> Ecosystem</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="ecosystem/from-vim.html"><strong aria-hidden="true">5.1.</strong> Migrating From Vim</a></li><li class="chapter-item expanded "><a href="ecosystem/other-software.html"><strong aria-hidden="true">5.2.</strong> Helix Mode In Other Software</a></li></ol></li><li class="chapter-item expanded "><a href="guides/index.html"><strong aria-hidden="true">6.</strong> Guides</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="guides/adding_languages.html"><strong aria-hidden="true">6.1.</strong> Adding Languages</a></li><li class="chapter-item expanded "><a href="guides/textobject.html"><strong aria-hidden="true">6.2.</strong> Adding Text Object Queries</a></li><li class="chapter-item expanded "><a href="guides/indent.html"><strong aria-hidden="true">6.3.</strong> Adding Indent Queries</a></li><li class="chapter-item expanded "><a href="guides/injection.html"><strong aria-hidden="true">6.4.</strong> Adding Injection Queries</a></li><li class="chapter-item expanded "><a href="guides/tags.html"><strong aria-hidden="true">6.5.</strong> Adding Tags Queries</a></li><li class="chapter-item expanded "><a href="guides/rainbow_bracket_queries.html"><strong aria-hidden="true">6.6.</strong> Adding Rainbow Bracket Queries</a></li></ol></li><li class="chapter-item expanded "><a href="FAQ.html"><strong aria-hidden="true">7.</strong> FAQ</a></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString();
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
