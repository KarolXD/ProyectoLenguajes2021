package com.example.repository;

import com.example.demo.Comment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CommentRepository  extends JpaRepository<Comment, Integer> {

    @Query(value =   "{CALL listaComment(:issue_id) }",nativeQuery = true)
    List<Comment> listComment(@Param("issue_id") int issue_id);

    @Query(value =   "{CALL SP_UpdateComments(:commend_id,:issue_id,:description,:usermodification) }",nativeQuery = true)
     void update (@Param("commend_id") int commend_id,
                        @Param("issue_id") int issue_id,
                        @Param("description") String description ,
                        @Param("usermodification") String usermodification);

}
