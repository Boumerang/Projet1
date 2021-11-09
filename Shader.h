#pragma once

#include <glad.h>

#include <string>
#include <fstream>
#include <sstream>
#include <iostream>

#include <glm/glm.hpp>
#include <glm/gtc/matrix_transform.hpp>
#include <glm/gtc/type_ptr.hpp>

class Shader
{
public:
	// The program ID
	unsigned int ID;

	// Constructor reads and builds the shader
	Shader(const char* vertexPath, const char* fragmentPath);

	// Activate the shader
	void use();

	// Utility uniform functions
	void setBool(const std::string& name, bool value) const;
	void setInt(const std::string& name, int value) const;
	void setFloat(const std::string& name, float value) const;
	void setVec3(const std::string& name, float value0, float value1, float value2) const;
	void setMat4(const std::string& name, glm::mat4 matrix);
};
