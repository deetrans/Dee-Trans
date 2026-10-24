<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Project rules
- Service pages, quote-form extra fields, languages and industries are data-driven from `src/data/*`; edit data, not page markup, so all pages and forms stay in sync.
- Public forms insert directly into insert-only tables (no anon SELECT) and upload to the private `quote-files` bucket under `uploads/`; never add public read access to submissions.
