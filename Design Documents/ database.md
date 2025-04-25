```markdown
# Database Schema

## Tables

### lyrics
- `id` (int, primary key)
- `title` (varchar)
- `lyrics` (text)
- `last_fetched` (datetime)

### Example Flow
1. On first search, fetch lyrics from external API and cache in this table.
2. On repeat searches, serve from local DB.

We may add `users` or `search_logs` if we implement login or analytics.
