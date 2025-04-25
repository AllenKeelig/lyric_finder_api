
---

## 🧠 3. `database.md`

You can include a UML diagram if you'd like (draw.io, dbdiagram.io, etc.) or just describe it like this:

```markdown
# Database Schema

## Tables

### lyrics
- `id` (int, primary key)
- `title` (varchar)
- `artist` (varchar)
- `lyrics` (text)
- `source_url` (varchar)
- `last_fetched` (datetime)

### Example Flow
1. On first search, fetch lyrics from external API and cache in this table.
2. On repeat searches, serve from local DB.

We may add `users` or `search_logs` if we implement login or analytics.
