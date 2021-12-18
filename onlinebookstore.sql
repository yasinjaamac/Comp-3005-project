PGDMP                         y            onlinebookstore    14.1    14.1                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    16394    onlinebookstore    DATABASE     Z   CREATE DATABASE onlinebookstore WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'C';
    DROP DATABASE onlinebookstore;
                postgres    false            �            1259    16400    book    TABLE     �   CREATE TABLE public.book (
    book_id "char" NOT NULL,
    book_name "char",
    book_title "char",
    book_pages integer,
    book_language "char",
    book_price integer,
    publisher_name "char"
);
    DROP TABLE public.book;
       public         heap    postgres    false            �            1259    16405 	   publisher    TABLE     �   CREATE TABLE public.publisher (
    publisher_name "char",
    address "char",
    email "char",
    phonenumber integer,
    bankingaccount "char"
);
    DROP TABLE public.publisher;
       public         heap    postgres    false            �            1259    16395    userinformation    TABLE     �   CREATE TABLE public.userinformation (
    user_id integer NOT NULL,
    first_name "char",
    last_name "char",
    address "char",
    email "char",
    phonenumber integer,
    password "char"
);
 #   DROP TABLE public.userinformation;
       public         heap    postgres    false            �          0    16400    book 
   TABLE DATA           u   COPY public.book (book_id, book_name, book_title, book_pages, book_language, book_price, publisher_name) FROM stdin;
    public          postgres    false    210   �       �          0    16405 	   publisher 
   TABLE DATA           `   COPY public.publisher (publisher_name, address, email, phonenumber, bankingaccount) FROM stdin;
    public          postgres    false    211   �       �          0    16395    userinformation 
   TABLE DATA           p   COPY public.userinformation (user_id, first_name, last_name, address, email, phonenumber, password) FROM stdin;
    public          postgres    false    209   �       p           2606    16404    book book_pkey 
   CONSTRAINT     Q   ALTER TABLE ONLY public.book
    ADD CONSTRAINT book_pkey PRIMARY KEY (book_id);
 8   ALTER TABLE ONLY public.book DROP CONSTRAINT book_pkey;
       public            postgres    false    210            n           2606    16399 $   userinformation userinformation_pkey 
   CONSTRAINT     g   ALTER TABLE ONLY public.userinformation
    ADD CONSTRAINT userinformation_pkey PRIMARY KEY (user_id);
 N   ALTER TABLE ONLY public.userinformation DROP CONSTRAINT userinformation_pkey;
       public            postgres    false    209            �      x������ � �      �      x������ � �      �      x������ � �     