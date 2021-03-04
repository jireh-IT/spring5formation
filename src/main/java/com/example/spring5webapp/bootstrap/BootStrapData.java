package com.example.spring5webapp.bootstrap;

import com.example.spring5webapp.model.Author;
import com.example.spring5webapp.model.Book;
import com.example.spring5webapp.model.Publisher;
import com.example.spring5webapp.repositories.AuthorRepository;
import com.example.spring5webapp.repositories.BookRepository;
import com.example.spring5webapp.repositories.PublisherRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class BootStrapData implements CommandLineRunner {

    private final AuthorRepository authorRepository;
    private final BookRepository bookRepository;
    private final PublisherRepository publisherRepository;

    public BootStrapData(AuthorRepository authorRepository, BookRepository bookRepository, PublisherRepository publisherRepository) {
        this.authorRepository = authorRepository;
        this.bookRepository = bookRepository;
        this.publisherRepository = publisherRepository;
    }

    @Override
    public void run(String... args) throws Exception {

        System.out.println("Started in Bootstrap");
        Publisher publisher = new Publisher();

        publisher.setAdressLine1("xxxx.xxxx.xxx");
        publisher.setCity("Kinshasa");
        publisher.setState("RDC");

        publisherRepository.save(publisher);
        System.out.println("Publisher Count "+publisherRepository.count());

        Author jireh = new Author("Jireh", "Kapanga");
        Book book = new Book("Amour", "1234565");
        jireh.getBooks().add(book);
        book.getAuthors().add(jireh);

        book.setPublisher(publisher);
        publisher.getBooks().add(book);

        authorRepository.save(jireh);
        bookRepository.save(book);
        publisherRepository.save(publisher);


        System.out.println("Numbre of boooks "+bookRepository.count());
        System.out.println("Publisher Number of Books "+publisher.getBooks().size());
    }
}
