import React, { useState } from "react";
import {
  Button,
  Label,
  Select,
  TextInput,
  Textarea,
  Toast,
  Spinner,
} from "flowbite-react";
import { HiCheck, HiExclamation } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";
import { buildApiUrl } from "../utils/constants";

const UploadBook = () => {
  const bookCategories = [
    "Fiction",
    "Non-fiction",
    "Mystery",
    "Programming",
    "Science fiction",
    "Fantasy",
    "Horror",
    "Biography",
    "Autobiography",
    "History",
    "Self-help",
    "Business",
    "Memoir",
    "Poetry",
    "Children's books",
    "Travel",
    "Religion and spirituality",
    "Science",
    "Art and design",
  ];

  const [selectedBookCategory, setSelectedBookCategory] = useState(
    bookCategories[0]
  );
  const [toastStatus, setToastStatus] = useState(null);
  const [bookTitle, setBookTitle] = useState("");
  const [searching, setSearching] = useState(false);
  const [imageURL, setImageURL] = useState("");

  const handleChangeSelectedValue = (event) => {
    console.log(event.target.value);
    setSelectedBookCategory(event.target.value);
  };

  const searchOpenLibrary = async () => {
    if (!bookTitle.trim()) return;

    setSearching(true);
    try {
      const response = await fetch(
        `https://openlibrary.org/search.json?q=${encodeURIComponent(
          bookTitle
        )}&limit=1`
      );
      const data = await response.json();

      if (data.docs && data.docs.length > 0) {
        const book = data.docs[0];

        // Populate form fields
        document.getElementById("authorName").value =
          book.author_name?.[0] || "";

        // Get cover image
        if (book.cover_i) {
          const coverUrl = `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`;
          document.getElementById("imageURL").value = coverUrl;
          setImageURL(coverUrl);
        }

        // Set category if it matches
        const openLibrarySubject = book.subject?.[0] || "";
        const matchedCategory = bookCategories.find((cat) =>
          openLibrarySubject.toLowerCase().includes(cat.toLowerCase())
        );
        if (matchedCategory) {
          setSelectedBookCategory(matchedCategory);
        }

        // Set description
        document.getElementById("bookDescription").value =
          book.first_sentence?.[0] ||
          `${book.title} by ${
            book.author_name?.[0] || "Unknown"
          }. First published in ${book.first_publish_year || "unknown"}.`;

        setToastStatus("success");
        setTimeout(() => setToastStatus(null), 3000);
      } else {
        setToastStatus("warning");
        setTimeout(() => setToastStatus(null), 3000);
      }
    } catch (error) {
      console.error("Error searching Open Library:", error);
      setToastStatus("error");
      setTimeout(() => setToastStatus(null), 3000);
    } finally {
      setSearching(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageURL = form.imageURL.value;
    const category = form.categoryName.value;
    const bookDescription = form.bookDescription.value;
    const bookPDFURL = form.bookPDFURL.value;

    const bookObj = {
      bookTitle,
      authorName,
      imageURL,
      category,
      bookDescription,
      bookPDFURL,
    };
    // console.log(dataObj)
    fetch(buildApiUrl("/upload-book"), {
      method: "POST",

      headers: {
        "Content-type": "application/json",
      },

      body: JSON.stringify(bookObj),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.insertedId) {
          setToastStatus("success");
          form.reset();
          setSelectedBookCategory(bookCategories[0]);
          setBookTitle("");
          setImageURL("");
        } else {
          setToastStatus("warning");
        }
        setTimeout(() => setToastStatus(null), 4000);
      })
      .catch(() => {
        setToastStatus("error");
        setTimeout(() => setToastStatus(null), 4000);
      });
  };

  return (
    <div className="px-4 my-12">
      {toastStatus && (
        <div className="fixed bottom-6 right-6 z-50">
          <Toast>
            {toastStatus === "success" && (
              <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500">
                <HiCheck className="h-5 w-5" />
              </div>
            )}
            {toastStatus === "warning" && (
              <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-yellow-100 text-yellow-500">
                <HiExclamation className="h-5 w-5" />
              </div>
            )}
            {toastStatus === "error" && (
              <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-500">
                <HiExclamation className="h-5 w-5" />
              </div>
            )}
            <div className="ml-3 text-sm font-normal">
              {toastStatus === "success" &&
                (searching
                  ? "Book found in Open Library!"
                  : "Book uploaded successfully!")}
              {toastStatus === "warning" &&
                (searching
                  ? "Book not found in Open Library."
                  : "Upload finished but no ID was returned.")}
              {toastStatus === "error" &&
                (searching
                  ? "Failed to search Open Library."
                  : "Failed to upload book. Please try again.")}
            </div>
            <Toast.Toggle onDismiss={() => setToastStatus(null)} />
          </Toast>
        </div>
      )}
      <h2 className="mb-8 text-3xl font-bold">Upload A Book!</h2>
      <form
        className="flex lg:w-[1180px] flex-col flex-wrap gap-4"
        onSubmit={handleSubmit}
      >
        {/* first row */}
        <div className="flex gap-8">
          {/* book name */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="bookTitle" value="Book Title" />
            </div>
            <div className="relative">
              <TextInput
                id="bookTitle"
                placeholder="Book Name"
                required
                type="text"
                name="bookTitle"
                className="w-full"
                value={bookTitle}
                onChange={(e) => setBookTitle(e.target.value)}
              />
              <button
                type="button"
                onClick={searchOpenLibrary}
                disabled={searching || !bookTitle.trim()}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-blue-600 hover:text-blue-800 disabled:text-gray-400 disabled:cursor-not-allowed"
                title="Search Open Library"
              >
                {searching ? (
                  <Spinner size="sm" />
                ) : (
                  <FiSearch className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          {/* author name */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="authorName" value="Author Name" />
            </div>
            <TextInput
              id="authorName"
              placeholder="Author Name"
              required
              type="text"
              name="authorName"
              className="w-full"
            />
          </div>
        </div>

        {/* 2nd Row */}
        <div className="flex gap-8">
          {/* book url */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="imageURL" value="Book Image URL" />
            </div>
            <TextInput
              id="imageURL"
              placeholder="Image URL"
              required
              type="text"
              name="imageURL"
              className="w-full"
              value={imageURL}
              onChange={(e) => setImageURL(e.target.value)}
            />
            {imageURL && (
              <div className="mt-3">
                <img
                  src={imageURL}
                  alt="Book cover preview"
                  className="h-48 w-auto object-cover rounded-lg shadow-md"
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
              </div>
            )}
          </div>

          {/* book category */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="inputState" value="Book Category" />
            </div>
            <Select
              id="inputState"
              name="categoryName"
              className="w-full rounded"
              value={selectedBookCategory}
              onChange={handleChangeSelectedValue}
            >
              {bookCategories.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>
          </div>
        </div>

        {/* full width div for book description */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookDescription" value="Book Description" />
          </div>
          <Textarea
            id="bookDescription"
            placeholder="Book Description"
            required
            type="text"
            name="bookDescription"
            className="w-full"
            rows={4}
          />
        </div>

        {/* book pdf url */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookPDFURL" value="Book PDF Link" />
          </div>
          <TextInput
            id="bookPDFURL"
            placeholder="Paste Book PDF URL here"
            required
            type="text"
            name="bookPDFURL"
            className="w-full"
          />
        </div>

        {/* Submit btn */}
        <Button type="submit" className="mt-5">
          Upload book
        </Button>
      </form>
    </div>
  );
};

export default UploadBook;
