'use client';

import React, { useState } from 'react';
import { X, UploadCloud } from 'lucide-react'; // Import ikon
import { Button } from '@/components/atoms/Button';
import { Input } from '@/components/atoms/Input';

type UploadSongModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const UploadSongModal = ({ isOpen, onClose }: UploadSongModalProps) => {
  // State untuk menyimpan file yang dipilih
  const [songFile, setSongFile] = useState<File | null>(null);
  const [coverImage, setCoverImage] = useState<File | null>(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  if (!isOpen) {
    return null;
  }

  // Fungsi-fungsi placeholder untuk handle file (logika akan ditambahkan nanti)
  const handleSongFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      const file = e.target.files[0];
      setSongFile(file);
      // Coba ekstrak judul dari nama file (tanpa ekstensi .mp3)
      setTitle(file.name.replace(/\.mp3$/, ''));
      // Di sini nanti kita tambahkan logika untuk ekstrak metadata (cover art)
    }
  };

  const handleCoverImageDrop = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files?.[0]) {
      setCoverImage(e.dataTransfer.files[0]);
    }
  };
  
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Di sini nanti logika untuk mengunggah file ke server dan menyimpan ke DB
    console.log({ title, description, songFile, coverImage });
    alert('Fungsi upload belum diimplementasikan.');
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-zinc-900 border border-zinc-700 rounded-2xl shadow-xl w-full max-w-lg mx-4 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-zinc-700">
          <h2 className="text-xl font-bold text-white">Tambahkan Lagu Baru</h2>
          <button onClick={onClose} className="text-zinc-400 hover:text-white">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleFormSubmit} className="p-6 space-y-4">
          {/* Input File Lagu */}
          <div>
            <label htmlFor="songFile" className="block text-sm font-medium text-gray-400 mb-2">
              File Lagu (.mp3)
            </label>
            <input
              id="songFile"
              type="file"
              accept=".mp3"
              onChange={handleSongFileChange}
              required
              className="w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700"
            />
          </div>

          {/* Input Judul dan Deskripsi */}
          <Input id="title" label="Judul Lagu" type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
          <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-400 mb-2">
                Deskripsi (Opsional)
              </label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={3}
                className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 focus:ring-blue-500 focus:border-blue-500 transition"
                placeholder="Ceritakan sedikit tentang lagu ini..."
              />
          </div>

          {/* Input Gambar Cover */}
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Gambar Cover
            </label>
            <label
              htmlFor="coverImage"
              onDrop={handleCoverImageDrop}
              onDragOver={(e) => e.preventDefault()} // Wajib ada untuk fungsionalitas drop
              className="flex justify-center w-full h-32 px-6 pt-5 pb-6 border-2 border-gray-600 border-dashed rounded-md cursor-pointer"
            >
              <div className="space-y-1 text-center">
                 <UploadCloud className="mx-auto h-12 w-12 text-gray-500" />
                <div className="flex text-sm text-gray-400">
                  <p className="pl-1">Drag & drop gambar, atau klik untuk memilih</p>
                </div>
                 <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
              </div>
              <input id="coverImage" name="coverImage" type="file" className="sr-only" accept="image/*" />
            </label>
          </div>
          
          {/* Tombol Aksi */}
          <div className="flex justify-end gap-4 pt-4">
            <Button type="button" variant="secondary" onClick={onClose}>
              Batal
            </Button>
            <Button type="submit">
              Simpan Lagu
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};