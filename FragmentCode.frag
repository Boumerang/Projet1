#version 330 core

out vec4 FragColor;

in vec3 Normal;
in vec3 FragPos;
in vec2 TexCoords;

uniform sampler2D floorTexture;
uniform vec3 lightPos;
uniform vec3 viewPos;

void main()
{    
	// color
	vec3 color = texture(floorTexture, TexCoords).rgb;

	// ambient
	vec3 ambient = color * 0.05;

	// diffuse
	vec3 lightDir = normalize(lightPos - FragPos);
	vec3 normal = normalize(Normal);
	float diff = max(dot(lightDir, normal), 0.0);
	vec3 diffuse = diff * color;
	// attenuation
	float dist = length(lightPos - FragPos);
	float attenuation = 1 / (1.0 + 0.045 * dist + 0.0075 * dist);

	// specular
	vec3 viewDir = normalize(viewPos - FragPos);
	vec3 halfwayDir = normalize(lightDir + viewDir);
	float spec = pow(max(dot(normal, halfwayDir), 0.0), 32.0); // sure ??
	vec3 specular = vec3(0.3) * spec;

	ambient *= attenuation;
	diffuse *= attenuation;
	specular *= attenuation;

	FragColor = vec4(ambient + diffuse + specular, 1.0);
}