#!/bin/bash
# scripts/sync-ghost-db.sh

echo "🔄 Syncing Ghost database from production..."

# Stop local Ghost
ghost stop --dir ~/ghost-local/ghost-cms

# Download production export
ssh $SERVER_USER@$SERVER_HOST "cd /var/www/ghost && ghost export"
scp $SERVER_USER@$SERVER_HOST:/var/www/ghost/content/data/ghost-export.json ./ghost-export.json

# Import to local Ghost
cd ~/ghost-local/ghost-cms
ghost import ghost-export.json

# Start local Ghost
ghost start

echo "✅ Database sync complete!"