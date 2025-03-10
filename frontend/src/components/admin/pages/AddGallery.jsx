"use client";
import React, { useState } from "react";
import Dropzone from "react-dropzone";
import { createGallery, imageUpload } from "@/services/operation/admin";

function AddGallery() {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [images, setImages] = useState([]);

  const uploadImage = async (acceptedFiles) => {
    const response = await imageUpload(acceptedFiles);
    const uploadedImages = response?.map((image) => ({
      public_id: image.asset_id,
      url: image.url,
    }));
    setImages((prevImages) => [...prevImages, ...uploadedImages]);
  };

  const removeImage = (publicId) => {
    const updatedImages = images.filter(
      (image) => image.public_id !== publicId
    );
    setImages(updatedImages);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare the data to be sent to the backend
    const data = {
      title,
      type,
      images,
    };

    try {
      // Call the createProduct function
      await createGallery(data);
      // Reset the form after successful submission
      setTitle("");
      setType("");
      setImages([]);
    } catch (error) {
      console.error("Error creating gallery:", error);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-4 mb-[100px]">
      <div>
        <div className=" font-bold text-3xl text-center w-full mb-6">
          Gallery
        </div>

        <form onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label htmlFor="title" className="block font-medium text-gray-600">
              Title *
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div className="space-y-2 mt-4">
            <label htmlFor="type" className="block font-medium text-gray-600">
              Type *
            </label>
            <select
              id="type"
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="w-full p-2 border rounded"
              required
            >
              <option value="" disabled>
                Select a type
              </option>
              <option value="Wedding stage 04">Wedding stage 04</option>
              <option value="Sangeet 02">Sangeet 02</option>
              <option value="Photografe & Videografe 03">
                Photografe & Videografe 03
              </option>
              <option value="Mandap 05">Mandap 05</option>
              <option value="Home decoration">Home decoration</option>
              <option value="Haldi & Mehandi 01">Haldi & Mehandi 01</option>
              <option value="Corporate Event & Big Event's">
                Corporate Event & Big Event's
              </option>
              <option value="Capale entry & Varmala stage 06">
                Capale entry & Varmala stage 06
              </option>
              <option value="Barat">Barat</option>
            </select>
          </div>

          <div className="space-y-2 mt-4">
            <label htmlFor="images" className="block font-medium text-gray-600">
              Upload Images *
            </label>
            <Dropzone onDrop={uploadImage}>
              {({ getRootProps, getInputProps }) => (
                <section>
                  <div
                    {...getRootProps()}
                    className="border-2 border-dashed p-4 text-center cursor-pointer"
                  >
                    <input {...getInputProps()} />
                    <p>
                      Drag 'n' drop some files here, or click to select files
                    </p>
                  </div>
                  <aside className="mt-4">
                    <h4>Uploaded Images</h4>
                    <div className="grid grid-cols-4 gap-2">
                      {images?.map((image) => (
                        <div key={image.public_id} className="relative">
                          <img
                            src={image.url}
                            alt="Uploaded"
                            className="h-24 w-full object-cover"
                          />
                          <button
                            type="button"
                            onClick={() => removeImage(image.public_id)}
                            className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded-full"
                          >
                            X
                          </button>
                        </div>
                      ))}
                    </div>
                  </aside>
                </section>
              )}
            </Dropzone>
          </div>

          <button
            type="submit"
            className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Create Gallery
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddGallery;
