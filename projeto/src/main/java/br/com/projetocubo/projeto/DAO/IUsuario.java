package br.com.projetocubo.projeto.DAO;

import org.springframework.data.repository.CrudRepository;

import br.com.projetocubo.projeto.model.Usuario;

public interface IUsuario extends CrudRepository<Usuario, Integer> {

}
