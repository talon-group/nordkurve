"use client"

import { revalidatePath, unstable_noStore as noStore } from "next/cache";
import React, { useEffect, useState } from "react";
import { BookmarkCard } from "@/app/components/Content/book-card";
// import SearchBar from "../components/Content/AddToFeed";
import { Announcement } from "@/app/components/Content/Announcements";
import { getBookmarkedAnnouncements } from "@/app/lib/bookmarks";

export default function BookmarksPage() {
  // Get the bookmarked announcements
  const [bookmarkedAnnouncements, setBookmarkedAnnouncements] = useState<Announcement[]>([]);

  useEffect(() => {
    // Fetch bookmarked announcements
    const bookmarks = getBookmarkedAnnouncements();
    setBookmarkedAnnouncements(bookmarks);
  }, []); // Fetch bookmarks only once on component mount

  const handleRemoveBookmark = (index: number) => {
    // Remove bookmark from bookmarks state
    const updatedBookmarks = bookmarkedAnnouncements.filter((_, i) => i !== index);
    setBookmarkedAnnouncements(updatedBookmarks);
    // Update local storage
    localStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));
  };

  return (
    <div className="grid items-start gap-y-8">
      <div className="flex items-center justify-between px-2">
        <div className="grid gap-1">
          <div className="relative z-10 flex flex-col items-center justify-center py-10">
            <BookmarkCard announcements={bookmarkedAnnouncements} onRemoveBookmark={handleRemoveBookmark} />
          </div>
        </div>
      </div>
    </div>
  );
}